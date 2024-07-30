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
    console.log(map);

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
  
    // Get tile data from the second tileset
    const tileData = map.tilesets[1].tileData as unknown as TilesetData;
    const firstgid = map.tilesets[1].firstgid;
    console.log(firstgid);
  
    // Each animated tile in Water set. 
    for (const tileIdStr in tileData) {

      // Tile ID needs to be inflated to match Global ID
      const tileid = parseInt(tileIdStr, 10);
  
      // Check if the tile has animation data
      if (!tileData[tileid].animation) continue;

      // Calculate Global Tile ID
      // const globalTileId = firstgid + tileid;
      // console.log(`Found animated tile data for local tile ID: ${tileid}, global tile ID: ${globalTileId}`);


      // Iterate over all tiles in the map
      map.forEachTile(tile => {
        // Skip empty tiles
        console.log(tile)
        if (tile.index === -1) return;
        // console.log(`Tile index: ${tile.index}, Expected Global Tile ID: ${tileid}`);
        // Check if the tile index matches the Global Tile ID
        // if (tile.index === tileid) {
        //   this.animatedTiles.push({
        //     tile,
        //     tileAnimationData: tileData[tileid].animation,
        //     firstgid,
        //     elapsedTime: 0,
        //   });
        // }
      });
       console.log(this.animatedTiles);
    }

  
  };

 
  
  // Animate tile function in main game for now.

  // handleCreateTilesData(map: Phaser.Tilemaps.Tilemap) {
  //   // Array of tiles
  //   this.animatedTiles = [];
  //   // Get ALL tiles First tileset in map

    
  //   const tileData = map.tilesets[1].tileData;
    
  //   console.log(tileData);
  //   for (const tileIdStr in tileData) {
  //     const tileid = parseInt(tileIdStr, 10);

  //     // Go through map // I feel like something is off about the numbers here
  //     map.forEachTile(tile => {

  //       // No Data stored in -1 layers in json
  //       if(tile.index === -1) {
  //         return;
  //       };

  //       // if tile id matches
  //       if (tile.index - map.tilesets[1].firstgid === tileid) {
  //         this.animatedTiles.push({
  //           tile,
  //           tileAnimationData: tileData[tileid].animation,
  //           firstgid: map.tilesets[1].firstgid,
  //           elapsedTime: 0,
  //         });
  //       };
  //     });
  //   };
  // };

};


