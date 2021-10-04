let msg = 'Вы умерли и не можете больше зайти на этот сервер.'
let death = ""
let file = data.openConfig('plugins/HardCore/HardCore.json', 'json', "{}")

mc.listen('onPreJoin', function(pl){
    let life = file.get(pl.realName, "")
    if(life == "0"){
        pl.disconnect(msg)
    }
    else{
        death = "1"
        file.set(pl.realName, death)
    }
})
mc.listen('onPlayerDie', function(pl){
    death = "0"
    file.set(pl.realName, death)
    pl.disconnect(msg)
})