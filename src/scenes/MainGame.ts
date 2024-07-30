import Phaser, { Tilemaps } from "phaser";

  // Interfaces

interface TileAnimationFrame {
  tileid: number;
  duration: number;
}

interface TileAnimationData {
  animation: TileAnimationFrame[];
}

interface TilesetData {
  [tileid: number]: TileAnimationData;
}

export class MainGame extends Phaser.Scene {
  // Interfaces
  

  // Variable Declaration.

    // CS this find the type
  public animatedTiles: any[] = [];


  constructor() {
    super('main_game');
  };

  preload() {
    console.log("made it to game");
  };

  create() {
    
    //Tileset
    const map = this.make.tilemap({key: 'tilemap'});

    const tileset_grass = map.addTilesetImage('Grass Tileset', 'grass_tiles', 32, 32);
    const tileset_anim_water = map.addTilesetImage('Animated water tiles', 'anim_water_tiles', 32, 32);
    
    // Null check
    if (!tileset_grass || !tileset_anim_water) {
      throw new Error('Failed to load tileset(s)');
    };

    const all_tiles: Tilemaps.Tileset[] = [tileset_grass, tileset_anim_water];

    map.createLayer('Ground', all_tiles);
    map.createLayer('Path', all_tiles);
    map.createLayer('Walls', all_tiles);
    
    // Create Animated tile data
    this.handleCreateTilesData(map);
    // console.log(map);

  };

  update() {
  

  };

    handleCreateTilesData(map: Phaser.Tilemaps.Tilemap) {
    // Ensure that the second tileset exists
    if (map.tilesets.length < 2) {
      console.error("The map does not contain enough tilesets.");
      return;
    }
  
    // Array of animated tiles
    this.animatedTiles = [];
  
    // Get tile data from the second tileset (Which has animated tiles)
    const tileData = map.tilesets[1].tileData as unknown as TilesetData;
    const firstgid = map.tilesets[1].firstgid;
  
    // Each animated tile in Water set. 
    for (const tileIdStr in tileData) {

      // Tile ID needs to be inflated to match Global ID
      const tileid = parseInt(tileIdStr, 10);
  
      // Check if the tile has animation data
      if (!tileData[tileid].animation) continue;

      // Calculate Global Tile ID
      const globalTileId = firstgid + tileid;

      // Iterate over all tiles in the map
      map.forEachTile(tile => {
        // Skip empty tiles
        if (tile.index === -1) return;
        // Check if the tile index matches the Global Tile ID
        if (tile.index === globalTileId) {
              this.animatedTiles.push({
            tile,
            tileAnimationData: tileData[tileid].animation,
            firstgid,
            elapsedTime: 0,
          });
        }
      }, undefined, undefined, undefined, undefined, undefined, undefined, 'Ground');
    }
    console.log(this.animatedTiles);
  
  };
  
 };


