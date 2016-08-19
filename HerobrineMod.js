var START = 0;

var sF = Level.getBiomeName;

ModPE.langEdit("menu.copyright", "©Mojang AB                                                 Herobrine Mod 1.0.5a1");

ModPE.langEdit("createWorldScreen.gameMode.survival.desc", "Limited resources, you'll need tools. You may get hurt. Watch out for Monsters, and Stay away from Herobrine, He miGH_TIMERt kill you anytime.");

ModPE.langEdit("createWorldScreen.gameMode.creative.desc", "Unlimited resources. No damage. Flying. No achievements even if you switch to survival later. Herobrine will still annoy you.");

ModPE.langEdit("progressScreen.message.building", "Building terrain and summoning" + ChatColor.RED + " Herobrine");

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

var unstuck = -1;

var chicken = [];

var cow = [];

var pig = [];

var sheep = [];

var wolf = [];

var villager = [];

var mushroom = [];

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

var Herobrine;

var SPAWNED_CHECK = 0;

var pitch;

var yaw;

var orX;

var orY;

var win = false;

var THROW_TIMER;

var HEROBRINE_POS1 = Entity.getX(Herobrine);

var HEROBRINE_POS2 = Entity.getY(Herobrine);

var HEROBRINE_POS3 = Entity.getZ(Herobrine);

ModPE.serverScript = function(a) {
    com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({
        run: function() {
            net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
        }
    }));
    if (a) Server.sendChat("BlockLauncher, enable scripts, please and thank you");
};

var toggle = false;

ModPE.serverScript(true);

function newLevel() {
    var a = Server.getAllPlayers();
    for (var b in a) {
        clientMessage("Succesfully loaded Herobrine Mod");
        clientMessage("Version : " + version);
        clientMessage("New usage of Server.getAllPlayers in each hooks.");
    }
}

var version = "1.0.5a1";

var preventOverridingTick = 400;

function useItem(a, b, c, d, e, f) {
    var g = Server.getAllPlayers();
    for (var h in g) if (324 == d) clientMessage("uoy rof srood oN");
}

var timez = 15e3;

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
        timez--;
        HTIME_CHECK = Math.floor(800 * Math.random() + 1);
        GH_TIMER = Math.floor(2 * Math.random() + 1);
        GH_TIMERm = Math.floor(2 * Math.random() + 1);
        gsh = Math.floor(30 * Math.random() + 1);
        gsmh = Math.floor(2 * Math.random() + 1);
        time = Level.getTime() - 19200 * Math.floor(Level.getTime() / 19200);
        if (0 == SPAWNED_CHECK) {
            if (1 == HTIME_CHECK && 0 == TIMER_TRUE && false == D_SPAWN) {
                pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
                yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
                orX = Math.sin(pitch) * Math.cos(yaw);
                orZ = Math.sin(pitch) * Math.sin(yaw);
                if (1 == GH_TIMER && false == SPAWNED_CHECK) {
                    if (1 == GH_TIMERm) {
                        Herobrine = Level.spawnMob(getPlayerX() + gsh, getPlayerY(), getPlayerZ() + gsh, EntityType.GHAST, "3herobrine.png");
                        Entity.setRenderType(Herobrine, 3);
                        Entity.setHealth(Herobrine, 999999);
                        Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        SPAWNED_CHECK = 1;
                    }
                    if (2 == GH_TIMERm) {
                        Herobrine = Level.spawnMob(getPlayerX() - gsh, getPlayerY(), getPlayerZ() - gsh, EntityType.GHAST, "3herobrine.png");
                        Entity.setRenderType(Herobrine, 3);
                        Entity.setHealth(Herobrine, 999999);
                        Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        SPAWNED_CHECK = 1;
                    }
                } else if (2 == GH_TIMER && false == SPAWNED_CHECK) {
                    if (1 == GH_TIMERm) {
                        Herobrine = Level.spawnMob(getPlayerX() + gsh, getPlayerY(), getPlayerZ() + gsh, EntityType.SILVERFISH, "3herobrine.png");
                        Entity.setRenderType(Herobrine, 3);
                        Entity.setHealth(Herobrine, 999999);
                        Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        for (b = 0; b < cow.length; b++) Entity.setTarget(cow[b], Herobrine);
                        if (1 == gsmh) Entity.setImmobile(Herobrine, true); else if (2 == gsmh) Entity.setImmobile(Herobrine, false);
                        SPAWNED_CHECK = 1;
                    }
                    if (2 == GH_TIMERm) {
                        Herobrine = Level.spawnMob(getPlayerX() - gsh, getPlayerY(), getPlayerZ() - gsh, EntityType.SILVERFISH, "3herobrine.png");
                        Entity.setRenderType(Herobrine, 3);
                        Entity.setHealth(Herobrine, 999999);
                        Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                        var c = Math.floor(11 * Math.random() + 1);
                        ModPE.playSoundFromFile("herobrine" + c + ".ogg");
                        for (b = 0; b < cow.length; b++) Entity.setTarget(cow[b], Herobrine);
                        SPAWNED_CHECK = 1;
                        if (1 == gsmh) Entity.setImmobile(Herobrine, true); else if (2 == gsmh) Entity.setImmobile(Herobrine, false);
                    }
                }
                unstuck = 20;
            }
            if (unstuck >= 1) {
                unstuck -= 1;
                if (0 == getTile(HEROBRINE_POS1, HEROBRINE_POS2, HEROBRINE_POS3)) ; else Entity.setPosition(Herobrine, HEROBRINE_POS1, HEROBRINE_POS2 + 1, HEROBRINE_POS3);
            }
            if (0 == unstuck) unstuck = -1;
            var d;
            d = Math.floor(200 * Math.random() + 1);
            if (1 == d) {
                pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
                yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
                orX = Math.sin(pitch) * Math.cos(yaw);
                orZ = Math.sin(pitch) * Math.sin(yaw);
                Level.spawnMob(getPlayerX() - 10 * orX, getPlayerY(), getPlayerZ() - 20 * orZ, EntityType.LIGH_TIMERTNING_BOLT);
            }
        }
        if (0 == preventOverridingTick) {
            Entity.remove(Herobrine);
            ModPE.playSoundFromFile("disappear.ogg");
            preventOverridingTick = 400;
            SPAWNED_CHECK = 0;
        }
        if (1 == SPAWNED_CHECK) {
            preventOverridingTick--;
            if (compareDistance(Herobrine, 15)) {
                Entity.remove(Herobrine);
                ModPE.playSoundFromFile("disappear.ogg");
                preventOverridingTick = 400;
                SPAWNED_CHECK = 0;
            }
        }
        if (0 == timez) {
            timez = 15e3;
            Herobrine = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 32, "3herobrine.png");
            Entity.setRenderType(Herobrine, 3);
            Entity.setHealth(Herobrine, 20);
            clientMessage(ChatColor.RED + "Where is your god now?");
            Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 34);
            Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 34);
        }
        if (14e3 == timez) {
            clientMessage(ChatColor.RED + "BURN BABY BURN!!!");
            var e = hrandom(0, 256);
            var f = hrandom(0, 256);
            ModPE.playSoundFromFile("defeat.ogg");
            setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() + 1, 51), setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() + 2, 51), 
            setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() - 1, 51), setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() - 2, 51), 
            setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ(), 51), setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() + 1, 51), 
            setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() + 2, 51), setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() - 1, 51), 
            setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() - 2, 51), setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() + 3, 51), 
            setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() + 3, 51), setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() - 3, 51), 
            setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() - 3, 51), setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() + 2, 51), 
            setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() + 2, 51), setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() - 2, 51), 
            setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() - 2, 51), setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 5, 51), setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 5, 51), setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 4, 51), 
            setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 4, 51), setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 4, 51), 
            setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 4, 51), setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 3, 51), 
            setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 3, 51), setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 3, 51), 
            setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 3, 51), setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() - 6, 51), setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() + 5, 51), 
            setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() + 6, 51), setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() - 6, 51), setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() + 5, 51), 
            setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() + 6, 51), setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() - 6, 51), setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() + 5, 51), 
            setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() + 6, 51), setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() - 5, 51), 
            setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() - 6, 51), setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() + 5, 51), 
            setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() + 6, 51), setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() - 6, 51), 
            setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() - 7, 51), setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() + 6, 51), 
            setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() + 7, 51), setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() - 6, 51), 
            setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() - 7, 51), setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() + 6, 51), 
            setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() + 7, 51), setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ() - 7, 51), 
            setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ() + 7, 51), setTile(Player.getX() - 1, Player.getY() - 1, Player.getZ() - 7, 51), 
            setTile(Player.getX() - 1, Player.getY() - 1, Player.getZ() + 7, 51), setTile(Player.getX(), Player.getY() - 1, Player.getZ() - 7, 51), 
            setTile(Player.getX(), Player.getY() - 1, Player.getZ() + 7, 51);
        }
        if (Player.getPointedEntity() == Herobrine) {
            Entity.remove(Herobrine);
            SPAWNED_CHECK = 0;
            preventOverridingTick = 400;
        }
        THROW_TIMER = Math.floor(1300 * Math.random() + 1);
        if (10 == THROW_TIMER) if (0 == SPAWNED_CHECK && 0 == TIMER_TRUE && false == D_SPAWN) {
            pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
            yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
            orX = Math.sin(pitch) * Math.cos(yaw);
            orZ = Math.sin(pitch) * Math.sin(yaw);
            THROW_BRINE = Level.spawnMob(getPlayerX() - 1 * orX, getPlayerY(), getPlayerZ() - 1 * orZ, EntityType.ZOMBIE, "herobrine.png");
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
            if (26 == getTile(getPlayerX(), getPlayerY(), getPlayerZ()) && false == COOL_DOWN_D && 0 == SPAWNED_CHECK && 0 == TIMER_TRUE) {
                px = getPlayerX();
                py = getPlayerY();
                pz = getPlayerZ();
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
                    D_HEROBRINE = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.SILVERFISH, "3herobrine.png");
                    Entity.setRenderType(D_HEROBRINE, 3);
                    Entity.setHealth(D_HEROBRINE, 1);
                    Entity.addEffect(D_HEROBRINE, MobEffect.movementSpeed, 1e4, 5, true, false);
                    ModPE.playSoundFromFile("herobrine_decoy.ogg");
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
        ModPE.importScript("https://dl.dropboxusercontent.com/s/senrlknvweka08d/HerobrineMod.js?dl=0", "HerobrineMod.js");
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

var D_HEROBRINE;

var LAVA_BLOCK;

var TIMER_TRUE = 0;

function attackHook(a, b) {
    var c = Server.getAllPlayers();
    for (var d in c) if (a == Herobrine) Level.addParticle(ParticleType.flame, Entity.getX(a), Entity.getY(a) + 1, Entity.getZ(a), 0, 0, 0, 20);
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
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2), 
        Level.addParticle(ParticleType.LAVA_BLOCK, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
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
        Entity.remove(D_HEROBRINE);
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

ModPE.importScript = function(a, b) {
    var c = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    c.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var d = new java.lang.Runnable({
                run: function() {
                    try {
                        var d = new java.net.URL(a);
                        var e = d.openConnection();
                        e.setRequestMethod("GET");
                        e.setDoOutput(true);
                        e.connect();
                        e.getContentLength();
                        var f = e.getInputStream();
                        var g = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                        var h = 0;
                        while ((h = f.read(g)) != -1) newScript += new java.lang.String(g, 0, h);
                        var i = c.getDir("modscripts", 0);
                        var j = new java.io.File(i, b);
                        var k = new java.io.PrintWriter(j);
                        k.write(newScript);
                        k.flush();
                        k.close();
                        try {
                            clientMessage(ChatColor.GOLD + "Please restart blocklauncher!");
                            net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(j, true);
                        } catch (l) {}
                    } catch (l) {
                        clientMessage("Error: Line 534: " + l);
                    }
                }
            });
            var e = new java.lang.Thread(d);
            e.start();
        }
    }));
};

var newScript;
