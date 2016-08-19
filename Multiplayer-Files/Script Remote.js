ModPE.serverScript = function(a) {
    com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({
        run: function() {
            net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
        }
    }));
    if (a) Server.sendChat("BlockLauncher, enable scripts, please and thank you");
};
