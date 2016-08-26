var fBrine;
var class=null;
var type=null;

var ModPEHerobrine = {
	spawnHerobrine: function(x,y,z,class,type,health) {
		var fBrine = Level.spawnMob(x, y, z, type, "3herobrine.png");
        Entity.setRenderType(fBrine, 3);
        Entity.setHealth(fBrine, health);
        },
        playSound: function(par1String) {
            ModPE.playSoundFromFile(par1String);
            },
            importTexture: function(par1String, par2String) {
                ModPE.overrideTexture(par1String, par2String);
                },
                msg: function(str) {
                    clientMessage("<Herobrine> : " + str)
                    }
            }

/*ModPEHerobrine.spawnHerobrine(x,y,z,class,type,health)
  ModPEHerobrine.playSound(par1String)
  ModPEHerobrine.importTexture(par1String, par2String)
  ModPEHerobrine.msg(str)
*\
