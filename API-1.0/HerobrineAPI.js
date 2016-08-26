var fBrine;

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
                    clientMessage(str)
                    }
            }
