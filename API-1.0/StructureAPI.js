/*The API is already built-in the main mod, so you have to enable the main mod first before your own.*/

var structureName = ["nether_portal","trap_lava","haunted_village","dungeon_tnt","deadplayer","tunnel","yourStructure"];

function spawnStructureHook(string,x,y,z){
    if(string == "nether_portal"){
        nether_portal(x,y+5,z);
        }
        if(string == "trap_lava"){
            trap_lava(x,y-3,z);
            }
            if(string == "haunted_village"){
                }
                if(string == "dungeon_tnt"){
                    dungeon1(x + getRandom(10,20),y-4,z + getRandom(10,20))
                }
                if(string == "deadplayer"){
                    deadplayer(x,y-1,z)
                }
                if(string == "tunnel"){
                    tunnel(x,y-7,z)
                    }
                    if(string == "yourStructure"){
                    yourstructure(x,y,z)
}
}
