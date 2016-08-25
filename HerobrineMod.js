var start = 0;

var sF = Level.getBiomeName;

ModPE.langEdit("menu.copyright", "©Mojang AB                                                 Herobrine Mod 1.0.5b6");

ModPE.langEdit("createWorldScreen.gameMode.survival.desc", "Limited resources, you'll need tools. You may get hurt. Watch out for Monsters, and Stay away from Herobrine, He might kill you anytime.");

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

var alea;

var time;

var Herobrine;

var spawned = 0;

var pitch;

var yaw;

var orX;

var orY;

var win = false;

var ebrine=0;

var bbrine;

var wintimer;

function newLevel() {
    clientMessage("Succesfully loaded Herobrine Mod");
    clientMessage("Version : " + version);
    clientMessage("Follow @BagasMC_ on twitter to report bugs, and to know about known bugs! Honestly, this is really important!")
    checkVersion()
}

var version = "1.0.5b6";

var preventOverridingTick = 400;

function useItem(a, b, c, d, e, f) {
    if (324 == d) clientMessage("uoy rof srood oN");
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

var minplus=null;
function modTick() {
    timez--;
    alea = Math.floor(400 * Math.random() + 1);
    gh = Math.floor(2 * Math.random() + 1);
    ghm = Math.floor(2 * Math.random() + 1);
    gsh = Math.floor(30 * Math.random() + 1);
    gsmh = Math.floor(2 * Math.random() + 1);
    time = Level.getTime() - 19200 * Math.floor(Level.getTime() / 19200);
    if (0 == spawned) {
        if (1 == alea && 0 == truetim && dspawn == false && ebrine == 0) {
            pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
            yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
            orX = Math.sin(pitch) * Math.cos(yaw);
            orZ = Math.sin(pitch) * Math.sin(yaw);
            if (1 == gh && false == spawned) {
                if(ghm == 1){
                    Herobrine = Level.spawnMob(getPlayerX() + gsh, getPlayerY(), getPlayerZ() + gsh, EntityType.GHAST, "3herobrine.png");
                Entity.setRenderType(Herobrine, 3);
                Entity.setHealth(Herobrine, 999999);
                Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                var a = Math.floor(11 * Math.random() + 1);
                ModPE.playSoundFromFile("herobrine" + a + ".ogg");
                if(gsmh==1){
                    Entity.setImmobile(Herobrine,true)
                    } else if(gsmh==2){
                        Entity.setImmobile(Herobrine,false)
                        }
                spawned = 1;
                    }
                    if(ghm == 2){
                        Herobrine = Level.spawnMob(getPlayerX() - gsh, getPlayerY(), getPlayerZ() - gsh, EntityType.GHAST, "3herobrine.png");
                Entity.setRenderType(Herobrine, 3);
                Entity.setHealth(Herobrine, 999999);
                Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                var a = Math.floor(11 * Math.random() + 1);
                ModPE.playSoundFromFile("herobrine" + a + ".ogg");
                if(gsmh==1){
                    Entity.setImmobile(Herobrine,true)
                    } else if(gsmh==2){
                        Entity.setImmobile(Herobrine,false)
                        }
                spawned = 1;
                    
                        }
            } else if (2 == gh && false == spawned) {
                if(ghm==1){
                Herobrine = Level.spawnMob(getPlayerX() + gsh, getPlayerY(), getPlayerZ() + gsh, EntityType.SILVERFISH, "3herobrine.png");
                Entity.setRenderType(Herobrine, 3);
                Entity.setHealth(Herobrine, 999999);
                Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                var a = Math.floor(11 * Math.random() + 1);
                ModPE.playSoundFromFile("herobrine" + a + ".ogg");
                for (i = 0; i < cow.length; i++) Entity.setTarget(cow[i], Herobrine);
                if(gsmh==1){
                    Entity.setImmobile(Herobrine,true)
                    } else if(gsmh==2){
                        Entity.setImmobile(Herobrine,false)
                        }
                spawned = 1;
            }
            if(ghm==2){
                Herobrine = Level.spawnMob(getPlayerX() - gsh, getPlayerY(), getPlayerZ() - gsh, EntityType.SILVERFISH, "3herobrine.png");
                Entity.setRenderType(Herobrine, 3);
                Entity.setHealth(Herobrine, 999999);
                Entity.addEffect(Herobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                var a = Math.floor(11 * Math.random() + 1);
                ModPE.playSoundFromFile("herobrine" + a + ".ogg");
                for (i = 0; i < cow.length; i++) Entity.setTarget(cow[i], Herobrine);
                spawned = 1;
                if(gsmh==1){
                    Entity.setImmobile(Herobrine,true)
                    } else if(gsmh==2){
                        Entity.setImmobile(Herobrine,false)
                        }
                }
                }
            unstuck = 20;
        }
        if (unstuck >= 1) {
            unstuck -= 1;
            if (0 == getTile(Entity.getX(Herobrine), Entity.getY(Herobrine), Entity.getZ(Herobrine))) ; else Entity.setPosition(Herobrine, Entity.getX(Herobrine), Entity.getY(Herobrine) + 1, Entity.getZ(Herobrine));
        }
        if (0 == unstuck) unstuck = -1;
        var b;
        b = Math.floor(200 * Math.random() + 1);
        if (1 == b) {
            pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
            yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
            orX = Math.sin(pitch) * Math.cos(yaw);
            orZ = Math.sin(pitch) * Math.sin(yaw);
            Level.spawnMob(getPlayerX() - 10 * orX, getPlayerY(), getPlayerZ() - 20 * orZ, EntityType.LIGHTNING_BOLT);
        }
    }
    if (0 == preventOverridingTick) {
        Entity.remove(Herobrine);
        ModPE.playSoundFromFile("disappear.ogg");
        preventOverridingTick = 400;
        spawned = 0;
    }
    if (1 == spawned) {
        preventOverridingTick--;
        if (compareDistance(Herobrine, 15)) {
            Entity.remove(Herobrine);
            ModPE.playSoundFromFile("disappear.ogg");
            preventOverridingTick = 400;
            spawned = 0;
        }
    }
    if (0 == timez) {
        timez = 15e3;
        Herobrine = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 32, "3herobrine.png");
        Entity.setRenderType(Herobrine, 3);
        Entity.setHealth(Herobrine, 20);
        clientMessage("�4Where is your god now?");
        Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 34);
        Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 34);
    }
    if (14e3 == timez) {
        clientMessage("�4BURN BABY BURN!!!");
        var c = hrandom(0, 256);
        var d = hrandom(0, 256);
        ModPE.playSoundFromFile("defeat.ogg");
        setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() + 1, 51);
        setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() + 2, 51);
        setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() - 1, 51);
        setTile(Player.getX() + 7, Player.getY() - 1, Player.getZ() - 2, 51);
        setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ(), 51);
        setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() + 1, 51);
        setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() + 2, 51);
        setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() - 1, 51);
        setTile(Player.getX() - 7, Player.getY() - 1, Player.getZ() - 2, 51);
        setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() + 3, 51);
        setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() + 3, 51);
        setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() - 3, 51);
        setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() - 3, 51);
        setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() + 2, 51);
        setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() + 2, 51);
        setTile(Player.getX() + 6, Player.getY() - 1, Player.getZ() - 2, 51);
        setTile(Player.getX() - 6, Player.getY() - 1, Player.getZ() - 2, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 4, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 4, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 4, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 4, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() - 3, 51);
        setTile(Player.getX() + 5, Player.getY() - 1, Player.getZ() + 3, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() - 3, 51);
        setTile(Player.getX() - 5, Player.getY() - 1, Player.getZ() + 3, 51);
        setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() + 4, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() - 4, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() + 3, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() - 5, 51);
        setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() + 5, 51);
        setTile(Player.getX() - 3, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() - 7, 51);
        setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() + 2, Player.getY() - 1, Player.getZ() + 7, 51);
        setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() - 6, 51);
        setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() - 7, 51);
        setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() + 6, 51);
        setTile(Player.getX() - 2, Player.getY() - 1, Player.getZ() + 7, 51);
        setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ() - 7, 51);
        setTile(Player.getX() + 1, Player.getY() - 1, Player.getZ() + 7, 51);
        setTile(Player.getX() - 1, Player.getY() - 1, Player.getZ() - 7, 51);
        setTile(Player.getX() - 1, Player.getY() - 1, Player.getZ() + 7, 51);
        setTile(Player.getX(), Player.getY() - 1, Player.getZ() - 7, 51);
        setTile(Player.getX(), Player.getY() - 1, Player.getZ() + 7, 51);
    }
    if (Player.getPointedEntity() == Herobrine) {
        Entity.remove(Herobrine);
        spawned = 0;
        preventOverridingTick = 400;
    }
    wintimer = Math.floor(1300 * Math.random() + 1);
    if (10 == wintimer) if (0 == spawned && 0 == truetim && dspawn==false) {
        pitch = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
        yaw = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
        orX = Math.sin(pitch) * Math.cos(yaw);
        orZ = Math.sin(pitch) * Math.sin(yaw);
        winbrine = Level.spawnMob(getPlayerX() - 1 * orX, getPlayerY(), getPlayerZ() - 1 * orZ, EntityType.ZOMBIE, "herobrine.png");
        Entity.setRenderType(winbrine, 3);
        Entity.setHealth(winbrine, 10);
        Entity.setVelY(getPlayerEnt(), 1.5);
        clientMessage(ChatColor.RED + "WHERE IS NOTCH?!?!");
        Entity.addEffect(winbrine, MobEffect.fireResistance, 1e4, 9999, true, false);
        Entity.addEffect(winbrine, MobEffect.movementSpeed, 1e4, 5, true, false);
        truetim = 1;
    } else if (1 == spawned ||  dspawn == true && wintimer == 10) ;
    if (1 == truetim) endtimer--;
    if (1 == truetim && 0 == endtimer) {
        endtimer = 40;
        truetim = 0;
        Entity.remove(winbrine);
    }
    time = Level.getTime() - 19200 * Math.floor(Level.getTime() / 19200); //The script below this comment is really hardcoded, dont touch!
    if (time < 19200 / 2) ; else {
        if (26 == getTile(getPlayerX(), getPlayerY(), getPlayerZ()) && cooldreamdown == false && spawned == 0 && truetim == 0) {
            px = getPlayerX();
            py = getPlayerY();
            pz = getPlayerZ();
            sleepStart = true;
        }
        if (true == sleepStart) {
            ptick++;
            if (60 == ptick) {
                ptick = 0;
                wakeup = true;
                sleepStart = false;
            }
        }
        if (true == wakeup && cooldreamdown == false) {
            wakeupt--;
            if (112 == wakeupt) {
                dHerobrine = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.SILVERFISH, "3herobrine.png");
                Entity.setRenderType(dHerobrine, 3);
                Entity.setHealth(dHerobrine, 1);
                Entity.addEffect(dHerobrine, MobEffect.movementSpeed, 1e4, 5, true, false);
                ModPE.playSoundFromFile("herobrine_decoy.ogg");
                dspawn=true;
            }
            if(dspawn==true) {
                cooldreamdown = true;
                
                wakeup = false;
                wakeupt = 120;
        }
        if(cooldreamdown==true){
           cooldown--;
}
if(cooldown==0){
cooldreamdown=false;
cooldown=200;
} 
    }
}
}

function procCmd(c) {
   var m = c.split(' ');
   var command = m[0];
   switch(command) {
           case 'download': {
  ModPE.importScript("https://dl.dropboxusercontent.com/s/senrlknvweka08d/HerobrineMod.js?dl=0", "HerobrineMod.js")
clientMessage(ChatColor.GOLD+' Please restart blocklauncher!');
break;}
}
}

var sleepStart = false;

var ptick = 0;

var px = null;

var py = null;

var pz = null;

var dmg = 5;

var dspawn = false;

var wakeup = false;

var cooldreamdown = false;

var cooldown = 200;

var wakeupt = 120;

var winbrine;

var endtimer = 40;

var dHerobrine;

var lava;

var truetim = 0;

function attackHook(a, b) {
    if (a == Herobrine) Level.addParticle(ParticleType.flame, Entity.getX(a), Entity.getY(a) + 1, Entity.getZ(a), 0, 0, 0, 20);
}

function hrandom(a, b) {
    return Math.floor(Math.random() * b + a);
}

function Vector3D(a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
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
    return Math.abs(Entity.getX(a) - Player.getX()) < b && Math.abs(Entity.getY(a) - Player.getY()) < b && Math.abs(Entity.getZ(a) - Player.getZ()) < b;
}

function deathHook(a, b) {
    if ("3herobrine.png" == Entity.getMobSkin(b)) {
        Entity.remove(b);
        preventOverridingTick = 400;
        Level.spawnMob(Entity.getX(b), Entity.getY(b), Entity.getZ(b), 36);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        Level.addParticle(ParticleType.lava, Entity.getX(b) - .2, Entity.getY(b) + 1, Entity.getZ(b), 0, 0, 0, 2);
        spawned = 0;
    }
    if ("herobrine.png" == Entity.getMobSkin(b) && b == winbrine) {
        Entity.remove(b);
        truetim = 0;
    }
    if (b == getPlayerEnt() && 1 == truetim) {
        Entity.remove(winbrine);
        truetim = 0;
    }
    if (b == getPlayerEnt() && true == dspawn) {
    Entity.remove(dHerobrine)
    dspawn=false;
}
if (b == getPlayerEnt() && 1 == ebrine) {
    Entity.remove(bbrine)
    ebrine=0;
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

function addFHerobrineRenderType(a) {
    var b = a.getModel();
    var c = 0;
    var d = b.getPart("head");
    var e = b.getPart("body");
    var f = b.getPart("rightArm").clear();
    var g = b.getPart("leftArm").clear();
    e.setTextureOffset(16, 16, true);
    e.addBox(-8, 0, -2, 4, 4, 4, c);
    e.addBox(-9, 1, -3, 4, 4, 4, c);
    e.addBox(-10, 2, -6, 4, 4, 4, c);
    e.addBox(-11, 3, -7, 4, 4, 4, c);
    e.addBox(-11, 3, -15, 4, 4, 8, c);
    e.addBox(4, 0, -2, 4, 4, 4, c);
    e.addBox(5, 1, -3, 4, 4, 4, c);
    e.addBox(6, 2, -6, 4, 4, 4, c);
    e.addBox(7, 3, -7, 4, 4, 4, c);
    e.addBox(7, 3, -15, 4, 4, 8, c);
    e.setTextureOffset(0, 0, true);
    e.addBox(-13, -4, -16, 8, 8, 8, c);
    e.addBox(5, -4, -16, 8, 8, 8, c);
    f.clear();
    f.setTextureOffset(41, 16, true);
    g.clear();
    g.setTextureOffset(41, 16, true);
}

var FHerobrineRenderType = Renderer.createHumanoidRenderer();

addFHerobrineRenderType(FHerobrineRenderType);

function entityHurtHook(a, b, c) {
    if (b == getPlayerEnt() && a == winbrine) Entity.setVelY(getPlayerEnt(), 1.5);
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
    if (1 == spawned) {
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

ModPE.importScript = function(scriptURL, scriptName) {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		var ru  = new java.lang.Runnable({ run: function() {
			try {
				var scriptUrl = new java.net.URL(scriptURL);
				var connection = scriptUrl.openConnection();
				connection.setRequestMethod("GET");
				connection.setDoOutput(true);
				connection.connect();
				connection.getContentLength();
				var input = connection.getInputStream();
				var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
				var bytesRead = 0;
				while((bytesRead = input.read(contents)) != -1) { 
					newScript += new java.lang.String(contents, 0, bytesRead);			   
				}
				var patchesFolder = ctx.getDir("modscripts", 0);
				var scriptFile = new java.io.File(patchesFolder, scriptName);
				var printWriter = new java.io.PrintWriter(scriptFile);
				printWriter.write(newScript);
				printWriter.flush();
				printWriter.close();
				try {
					
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
				} catch(e) {
					//clientMessage("Error: Line 534: " + e);
				}
			} catch(e) {
				clientMessage("Error: Line 534: " + e);
			}
		}});
		
		}
	}));
}

var newScript;


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
