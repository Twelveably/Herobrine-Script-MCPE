/*
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
You are free to:
Share - copy and redistribute the material in any medium or format.
Adapt - remix, transform, and build upon the material for any purpose, even commercially, But with credit to the original author.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must ask the Owner of this mod if you can release it to the public.
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
*/


var START = 0;

var sF = Level.getBiomeName;

ModPE.langEdit("menu.copyright", "©Mojang AB                                                 ENTITY_HEROBRINE Mod 1.0.5a3");

ModPE.langEdit("createWorldScreen.gameMode.survival.desc", "Limited resources, you'll need tools. You may get hurt. Watch out for Monsters, and Stay away from ENTITY_HEROBRINE, He miGH_TIMERt kill you anytime.");

ModPE.langEdit("createWorldScreen.gameMode.creative.desc", "Unlimited resources. No damage. Flying. No achievements even if you switch to survival later. ENTITY_HEROBRINE will still annoy you.");

ModPE.langEdit("progressScreen.message.building", "Building terrain and summoning" + ChatColor.RED + " ENTITY_HEROBRINE");

ModPE.setItem(324, "skull_skeleton", 0, "rooD nedooW");

Block.defineBlock(64, "rood nedooW", "missing_tile", 1, false, 0);

var Card = android.os.Environment.getExternalStorageDirectory();

var Dir1 = new java.io.File(Card.getAbsolutePath(), "games/");

var Dir2 = new java.io.File(Dir1, "com.mojang/minecraftpe");

var File = new java.io.File(Dir2, "options.txt");

var sound1 = new android.media.MediaPlayer();

var sound2 = new android.media.MediaPlayer();

var sound3 = new android.media.MediaPlayer();

var start = true;

var S_RECHECKER = -1;

var chicken = [];

var cow = [];

var pig = [];

var sheep = [];

var wolf = [];

var villager = [];

var mushroom = [];

var POS_X = getPlayerX()

var POS_Y = getPlayerY()

var POS_Z = getPlayerZ()

Name = "mp_username";

PlayerN = getOptionAttr(Name);

function getOptionAttr(a) {
    var b = new java.io.BufferedReader(new java.io.FileReader(File));
    var c, d;
    var e = new Array();
    while (null != (c = b.readLine())) e.push(c);
    i = e.join().replace(",", ":");
    d = i.split(":");
    return d[d.indexOf(a) + 1];
}

var countdown = false;

ModPE.overrideTexture("images/3herobrine.png", "https://dl.dropboxusercontent.com/s/lbwlmb2wbju7b7e/herobrine.png?dl=0");

ModPE.overrideTexture("images/herobrine.png", "https://dl.dropboxusercontent.com/s/lbwlmb2wbju7b7e/herobrine.png?dl=0");

ModPE.overrideTexture("images/sherobrine.png", "https://dl.dropboxusercontent.com/s/lbwlmb2wbju7b7e/herobrine.png?dl=0");

var HTIME_CHECK;

var TIMER_TRUE;

var ENTITY_HEROBRINE;

var SPAWNED_CHECK = 0;

var pitch;

var yaw;

var orX;

var orY;

var win = false;

var THROW_TIMER;

var ENTITY_HEROBRINE_POS1 = Entity.getX(ENTITY_HEROBRINE);

var ENTITY_HEROBRINE_POS2 = Entity.getY(ENTITY_HEROBRINE);

var ENTITY_HEROBRINE_POS3 = Entity.getZ(ENTITY_HEROBRINE);

ModPE.serverScript = function(a) {
    com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({
        run: function() {
            net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
        }
    }));
    if (a) Server.sendChat("BlockLauncher, enable scripts, please and thank you");
};

var a = false;

ModPE.serverScript(true);

function newLevel() {
    var a = Server.getAllPlayers();
    for (var b in a) {
        clientMessage("Succesfully loaded Herobrine Mod");
        clientMessage("Version : " + version);
        checkVersion()
        if(updateWindow) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateVersion();
                }
                catch(err) {
                    clientMessage("Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    }
}
}

var version = "1.0.5a3";

var preventOverridingTick = 400;

function useItem(a, b, c, d, e, f) {
    var g = Server.getAllPlayers();
    for (var h in g) if (324 == d) clientMessage("uoy rof srood oN");
}

var TIME_Z = 15e3;

ModPE.playSoundFromFile = function(a) {
    try {
        if (false == sound1.isPlaying()) {
            sound1.reset();
            sound1.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/HerobrineSound/" + a);
            sound1.prepare();
            sound1.start();
            return;
        }
        if (false == sound2.isPlaying()) {
            sound2.reset();
            sound2.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/HerobrineSound/" + a);
            sound2.prepare();
            sound2.start();
            return;
        } else {
            sound3.reset();
            sound3.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/HerobrineSound/" + a);
            sound3.prepare();
            sound3.start();
        }
    } catch (b) {
        clientMessage("Herobrine Mod:No Sounds!");
    }
};

var minplus = null;

function modTick() {
    var a = Server.getAllPlayers();
    for (var b in a) {
        TIME_Z--;
        HTIME_CHECK = Math.floor(800 * Math.random() + 1);
        GH_TIMER = Math.floor(2 * Math.random() + 1);
        GH_TM = Math.floor(2 * Math.random() + 1);
        G_SH = Math.floor(25 * Math.random() + 1);
        GS_MH = Math.floor(2 * Math.random() + 1);
        time = Level.getTime() - 19200 * Math.floor(Level.getTime() / 19200);
        if (0 == SPAWNED_CHECK) {
            if (1 == HTIME_CHECK && 0 == TIMER_TRUE && false == D_SPAWN) {
                pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
                yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
                orX = Math.sin(pitch) * Math.cos(yaw);
                orZ = Math.sin(pitch) * Math.sin(yaw);
                if (1 == GH_TIMER && false == SPAWNED_CHECK) {
                    if (1 == GH_TM) {
                        ENTITY_HEROBRINE = Level.spawnMob(POS_X + G_SH, POS_Y, POS_Z + G_SH, EntityType.GHAST, "3herobrine.png");
                        Entity.setRenderType(ENTITY_HEROBRINE, 3);
                        Entity.setHealth(ENTITY_HEROBRINE, 999999);
                        Entity.addEffect(ENTITY_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        SPAWNED_CHECK = 1;
                    }
                    if (2 == GH_TM) {
                        ENTITY_HEROBRINE = Level.spawnMob(POS_X - G_SH, POS_Y, POS_Z - G_SH, EntityType.GHAST, "3herobrine.png");
                        Entity.setRenderType(ENTITY_HEROBRINE, 3);
                        Entity.setHealth(ENTITY_HEROBRINE, 999999);
                        Entity.addEffect(ENTITY_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        SPAWNED_CHECK = 1;
                    }
                } else if (2 == GH_TIMER && false == SPAWNED_CHECK) {
                    if (1 == GH_TM) {
                        ENTITY_HEROBRINE = Level.spawnMob(POS_X + G_SH, POS_Y, POS_Z + G_SH, EntityType.SILVERFISH, "3herobrine.png");
                        Entity.setRenderType(ENTITY_HEROBRINE, 3);
                        Entity.setHealth(ENTITY_HEROBRINE, 999999);
                        Entity.addEffect(ENTITY_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        for (b = 0; b < cow.length; b++) Entity.setTarget(cow[b], ENTITY_HEROBRINE);
                        if (1 == GS_MH) Entity.setImmobile(ENTITY_HEROBRINE, true); else if (2 == GS_MH) Entity.setImmobile(ENTITY_HEROBRINE, false);
                        SPAWNED_CHECK = 1;
                    }
                    if (2 == GH_TM) {
                        ENTITY_HEROBRINE = Level.spawnMob(POS_X - G_SH, POS_Y, POS_Z - G_SH, EntityType.SILVERFISH, "3herobrine.png");
                        Entity.setRenderType(ENTITY_HEROBRINE, 3);
                        Entity.setHealth(ENTITY_HEROBRINE, 999999);
                        Entity.addEffect(ENTITY_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        for (b = 0; b < cow.length; b++) Entity.setTarget(cow[b], ENTITY_HEROBRINE);
                        SPAWNED_CHECK = 1;
                        if (1 == GS_MH) Entity.setImmobile(ENTITY_HEROBRINE, true); else if (2 == GS_MH) Entity.setImmobile(ENTITY_HEROBRINE, false);
                    }
                }
                S_RECHECKER = 20;
            }
            if (S_RECHECKER >= 1) {
                S_RECHECKER -= 1;
                if (0 == getTile(ENTITY_HEROBRINE_POS1, ENTITY_HEROBRINE_POS2, ENTITY_HEROBRINE_POS3)) ; else Entity.setPosition(ENTITY_HEROBRINE, ENTITY_HEROBRINE_POS1, ENTITY_HEROBRINE_POS2 + 1, ENTITY_HEROBRINE_POS3);
            }
            if (0 == S_RECHECKER) S_RECHECKER = -1;
            var d;
            d = Math.floor(200 * Math.random() + 1);
            if (1 == d) {
                pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
                yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
                orX = Math.sin(pitch) * Math.cos(yaw);
                orZ = Math.sin(pitch) * Math.sin(yaw);
                Level.spawnMob(POS_X - 10 * orX, POS_Y, POS_Z - 20 * orZ, EntityType.LIGHTNING_BOLT);
            }
        }
        if (0 == preventOverridingTick) {
            Entity.remove(ENTITY_HEROBRINE);
            ModPE.playSoundFromFile("disappear.ogg");
            preventOverridingTick = 400;
            SPAWNED_CHECK = 0;
        }
        if (1 == SPAWNED_CHECK) {
            preventOverridingTick--;
            if (compareDistance(ENTITY_HEROBRINE, 15)) {
                Entity.remove(ENTITY_HEROBRINE);
                ModPE.playSoundFromFile("disappear.ogg");
                preventOverridingTick = 400;
                SPAWNED_CHECK = 0;
            }
        }
        if (0 == TIME_Z) {
            TIME_Z = 15e3;
            ENTITY_HEROBRINE = Level.spawnMob(POS_X, POS_Y, POS_Z, 32, "3herobrine.png");
            Entity.setRenderType(ENTITY_HEROBRINE, 3);
            Entity.setHealth(ENTITY_HEROBRINE, 20);
            clientMessage(ChatColor.RED + "Where is your god now?");
            Level.spawnMob(POS_X, POS_Y, POS_Z, 34);
            Level.spawnMob(POS_X, POS_Y, POS_Z, 34);
        }
        if (14e3 == TIME_Z) {
            clientMessage(ChatColor.RED + "BURN BABY BURN!!!");
            var e = hrandom(0, 256);
            var f = hrandom(0, 256);
            ModPE.playSoundFromFile("defeat.ogg");
            setTile(Player.getX()+7,Player.getY()-1,Player.getZ()+1,51),setTile(Player.getX()+7,Player.getY()-1,Player.getZ()+2,51),setTile(Player.getX()+7,Player.getY()-1,Player.getZ()-1,51),setTile(Player.getX()+7,Player.getY()-1,Player.getZ()-2,51),setTile(Player.getX()-7,Player.getY()-1,Player.getZ(),51),setTile(Player.getX()-7,Player.getY()-1,Player.getZ()+1,51),setTile(Player.getX()-7,Player.getY()-1,Player.getZ()+2,51),setTile(Player.getX()-7,Player.getY()-1,Player.getZ()-1,51),setTile(Player.getX()-7,Player.getY()-1,Player.getZ()-2,51),setTile(Player.getX()+6,Player.getY()-1,Player.getZ()+3,51),setTile(Player.getX()-6,Player.getY()-1,Player.getZ()+3,51),setTile(Player.getX()+6,Player.getY()-1,Player.getZ()-3,51),setTile(Player.getX()-6,Player.getY()-1,Player.getZ()-3,51),setTile(Player.getX()+6,Player.getY()-1,Player.getZ()+2,51),setTile(Player.getX()-6,Player.getY()-1,Player.getZ()+2,51),setTile(Player.getX()+6,Player.getY()-1,Player.getZ()-2,51),setTile(Player.getX()-6,Player.getY()-1,Player.getZ()-2,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()-4,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()+4,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()-4,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()+4,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()-3,51),setTile(Player.getX()+5,Player.getY()-1,Player.getZ()+3,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()-3,51),setTile(Player.getX()-5,Player.getY()-1,Player.getZ()+3,51),setTile(Player.getX()+4,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()+4,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()+4,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()+4,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()-4,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()-4,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()-4,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()-4,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()+3,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()+3,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()+3,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()+3,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()-3,Player.getY()-1,Player.getZ()-5,51),setTile(Player.getX()-3,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()-3,Player.getY()-1,Player.getZ()+5,51),setTile(Player.getX()-3,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()+2,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()+2,Player.getY()-1,Player.getZ()-7,51),setTile(Player.getX()+2,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()+2,Player.getY()-1,Player.getZ()+7,51),setTile(Player.getX()-2,Player.getY()-1,Player.getZ()-6,51),setTile(Player.getX()-2,Player.getY()-1,Player.getZ()-7,51),setTile(Player.getX()-2,Player.getY()-1,Player.getZ()+6,51),setTile(Player.getX()-2,Player.getY()-1,Player.getZ()+7,51),setTile(Player.getX()+1,Player.getY()-1,Player.getZ()-7,51),setTile(Player.getX()+1,Player.getY()-1,Player.getZ()+7,51),setTile(Player.getX()-1,Player.getY()-1,Player.getZ()-7,51),setTile(Player.getX()-1,Player.getY()-1,Player.getZ()+7,51),setTile(Player.getX(),Player.getY()-1,Player.getZ()-7,51),setTile(Player.getX(),Player.getY()-1,Player.getZ()+7,51);
        }
        if (Player.getPointedEntity() == ENTITY_HEROBRINE) {
            Entity.remove(ENTITY_HEROBRINE);
            SPAWNED_CHECK = 0;
            preventOverridingTick = 400;
        }
        THROW_TIMER = Math.floor(1300 * Math.random() + 1);
        if (10 == THROW_TIMER) if (0 == SPAWNED_CHECK && 0 == TIMER_TRUE && false == D_SPAWN) {
            pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
            yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
            orX = Math.sin(pitch) * Math.cos(yaw);
            orZ = Math.sin(pitch) * Math.sin(yaw);
            THROW_BRINE = Level.spawnMob(POS_X - 1 * orX, POS_Y, POS_Z - 1 * orZ, EntityType.ZOMBIE, "herobrine.png");
            Entity.setRenderType(THROW_BRINE, 3);
            Entity.setHealth(THROW_BRINE, 10);
            Entity.setVelY(getPlayerEnt(), 1.5);
            clientMessage(ChatColor.RED + "WHERE IS NOTCH?!?!");
            Entity.addEffect(THROW_BRINE, MobEffect.fireResistance, 1e4, 9999, true, false);
            Entity.addEffect(THROW_BRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
            TIMER_TRUE = 1;
        } else if (1 == SPAWNED_CHECK || true == D_SPAWN && 10 == THROW_TIMER) ;
        if (1 == TIMER_TRUE) TIMER_END--;
        if (1 == TIMER_TRUE && 0 == TIMER_END) {
            TIMER_END = 40;
            TIMER_TRUE = 0;
            Entity.remove(THROW_BRINE);
        }
        time = Level.getTime() - 19200 * Math.floor(Level.getTime() / 19200);
        if (time < 19200 / 2) ; else {
            if (26 == getTile(POS_X, POS_Y, POS_Z) && false == COOL_DOWN_D && 0 == SPAWNED_CHECK && 0 == TIMER_TRUE) {
                px = POS_X;
                py = POS_Y;
                pz = POS_Z;
                DREAM_START = true;
            }
            if (true == DREAM_START) {
                P_TICK++;
                if (60 == P_TICK) {
                    P_TICK = 0;
                    DREAM_END = true;
                    DREAM_START = false;
                }
            }
            if (true == DREAM_END && false == COOL_DOWN_D) {
                DREAM_ENDt--;
                if (112 == DREAM_ENDt) {
                    D_ENTITY_HEROBRINE = Level.spawnMob(POS_X, POS_Y, POS_Z, EntityType.SILVERFISH, "3herobrine.png");
                    Entity.setRenderType(D_ENTITY_HEROBRINE, 3);
                    Entity.setHealth(D_ENTITY_HEROBRINE, 1);
                    Entity.addEffect(D_ENTITY_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                    ModPE.playSoundFromFile("ENTITY_HEROBRINE_decoy.ogg");
                    D_SPAWN = true;
                }
                if (true == D_SPAWN) {
                    COOL_DOWN_D = true;
                    DREAM_END = false;
                    DREAM_ENDt = 120;
                }
                if (true == COOL_DOWN_D) C_DOWN--;
                if (0 == C_DOWN) {
                    COOL_DOWN_D = false;
                    C_DOWN = 200;
                }
            }
        }
    }
}

function procCmd(a) {
    var b = a.split(" ");
    var c = b[0];
    switch (c) {
      case "download":
        ModPE.importScript("https://dl.dropboxusercontent.com/s/senrlknvweka08d/ENTITY_HEROBRINEMod.js?dl=0", "ENTITY_HEROBRINEMod.js");
    }
}

var DREAM_START = false;

var P_TICK = 0;

var px = null;

var py = null;

var pz = null;

var dmg = 5;

var D_SPAWN = false;

var DREAM_END = false;

var COOL_DOWN_D = false;

var C_DOWN = 200;

var DREAM_ENDt = 120;

var THROW_BRINE;

var TIMER_END = 40;

var D_ENTITY_HEROBRINE;

var LAVA_BLOCK;

var TIMER_TRUE = 0;

function attackHook(a, b) {
    var c = Server.getAllPlayers();
    for (var d in c) if (a == ENTITY_HEROBRINE) Level.addParticle(ParticleType.flame, Entity.getX(a), Entity.getY(a) + 1, Entity.getZ(a), 0, 0, 0, 20);
}

function hrandom(a, b) {
    var c = Server.getAllPlayers();
    for (var d in c) return Math.floor(Math.random() * b + a);
}

function Vector3D(a, b, c) {
    var d = Server.getAllPlayers();
    for (var e in d) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
}

function lookDir() {
    var a = new Vector3D(0, 0, 0);
    var b = getYaw();
    var c = getPitch();
    a.y = -Math.sin(java.lang.Math.toRadians(c));
    a.x = -Math.sin(java.lang.Math.toRadians(b)) * Math.cos(java.lang.Math.toRadians(c));
    a.z = Math.cos(java.lang.Math.toRadians(b)) * Math.cos(java.lang.Math.toRadians(c));
    return a;
}

function compareDistance(a, b) {
    var c = Server.getAllPlayers();
    for (var d in c) return Math.abs(Entity.getX(a) - Player.getX()) < b && Math.abs(Entity.getY(a) - Player.getY()) < b && Math.abs(Entity.getZ(a) - Player.getZ()) < b;
}

function deathHook(a, b) {
    if ("3herobrine.png" == Entity.getMobSkin(b)) {
        Entity.remove(b);
        preventOverridingTick = 400;
        Level.spawnMob(Entity.getX(b), Entity.getY(b), Entity.getZ(b), 36);
        Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2),Level.addParticle(ParticleType.LAVA_BLOCK,Entity.getX(b)-.2,Entity.getY(b)+1,Entity.getZ(b),0,0,0,2);
        SPAWNED_CHECK = 0;
    }
    if ("herobrine.png" == Entity.getMobSkin(b) && b == THROW_BRINE) {
        Entity.remove(b);
        TIMER_TRUE = 0;
    }
    if (b == getPlayerEnt() && 1 == TIMER_TRUE) {
        Entity.remove(THROW_BRINE);
        TIMER_TRUE = 0;
    }
    if (b == getPlayerEnt() && true == D_SPAWN) {
        Entity.remove(D_ENTITY_HEROBRINE);
        D_SPAWN = false;
    }
}

function getSurface(a, b) {
    var c = 0;
    for (var d = 1; d <= 128; d++) if (0 == Level.getTile(a, d, b)) {
        c = d;
        break;
    }
    return c;
}

function entityHurtHook(a, b, c) {
    if (b == getPlayerEnt() && a == THROW_BRINE) Entity.setVelY(getPlayerEnt(), 1.5);
}

function entityRemovedHook(a) {
    for (var b in chicken) if (a == chicken[b]) {
        chicken.splice(b, 1);
        return;
    }
    for (var b in cow) if (a == cow[b]) {
        cow.splice(b, 1);
        return;
    }
    for (var b in pig) if (a == pig[b]) {
        pig.splice(b, 1);
        return;
    }
    for (var b in sheep) if (a == sheep[b]) {
        sheep.splice(b, 1);
        return;
    }
    for (var b in wolf) if (a == wolf[b]) {
        wolf.splice(b, 1);
        return;
    }
    for (var b in villager) if (a == villager[b]) {
        villager.splice(b, 1);
        return;
    }
    for (var b in mushroom) if (a == mushroom[b]) {
        mushroom.splice(b, 1);
        return;
    }
}

function entityAddedHook(a) {
    if (1 == SPAWNED_CHECK) {
        if (10 == Entity.getEntityTypeId(a)) chicken.push(a);
        if (11 == Entity.getEntityTypeId(a)) cow.push(a);
        if (12 == Entity.getEntityTypeId(a)) pig.push(a);
        if (13 == Entity.getEntityTypeId(a)) sheep.push(a);
        if (14 == Entity.getEntityTypeId(a)) wolf.push(a);
        if (15 == Entity.getEntityTypeId(a)) villager.push(a);
        if (16 == Entity.getEntityTypeId(a)) mushroom.push(a);
    }
}

function screenChangeHook(a) {
    if ("start_screen" == a) ;
}

var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://dl.dropboxusercontent.com/s/33icksqw7c6dheb/version.txt?dl=0");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
                    clientMessage("New version! " + newUpdate + ", Download the new version\n on mcpedl.com");
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("No updates available");
                }
            }
            catch(err) {
                clientMessage("Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: dropbox.com") {
                                clientMessage("No internet connection.");
                            }
                            else {
                                clientMessage("Error: \n"+ err);
                            } 
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}

function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);        
        upd.setTitle("New version available!");
        upd.setMessage("An update to Herobrine Mod was found!\nWould you like to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate);
        upd.setNegativeButton("Later", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Update", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL("https://raw.githubusercontent.com/bagas123/Herobrine-Mod-MCPE/master/HerobrineMod.js");
                            var check = urls.openConnection();
                            check.setRequestMethod("GET");
                            check.setDoOutput(true);
                            check.connect();
                            check.getContentLength();
                            var script = check.getInputStream();
                            var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var byteCount = 0;
                            while((byteCount = script.read(typeb)) != -1) { 
                                updateMod += new java.lang.String(typeb, 0, byteCount);               
                            }
                            var modpeFolder = ctx.getDir("modscripts", 0);
                            var modpeFile = new java.io.File(modpeFolder, "HerobrineMod.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("Downloaded and enabled!");
                                   
                            }
                            catch(err) {
                                clientMessage("Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("Error: \n" + err);
                        }
                    }
                }
                var threadt = new java.lang.Thread(ru);
                threadt.start();
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        clientMessage("Error: \n" + err);
    }
}
