import {testFunction} from './modules/console'
import {initMap} from './modules/map'

document.addEventListener('DOMContentLoaded', function(){
    let oldWidth = 0;
    initMap()


    window.addEventListener('resize', function(e){
        let newWidth = e.target.innerWidth
        //if width changes between 740 then trigger the map to reload
        if(newWidth >= 740 && oldWidth <= 740  || newWidth <= 740 && oldWidth >= 740){
            initMap()
        }
        oldWidth = newWidth;
    })
})
