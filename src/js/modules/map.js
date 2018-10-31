var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    //console.log(document.documentElement.getElementsByTagName('body')[0].clientWidth)
export function initMap() {
    let mapCenter ={}
    
    if(window.innerWidth >= 740){
        //screen is tablet size and map center should be to the right of the logo
        mapCenter.lat = -41.2942303
        mapCenter.lng = 174.8270504
    }else{
        //screen is phone size and map center should be on the logo
        mapCenter.lat = -41.2942303
        mapCenter.lng =174.7958889
    }

    let logoLocation = {
        lat: -41.2942303,
        lng: 174.7958889
    } 

  
    let map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 14
    });

    let marker = new google.maps.Marker({
        position: logoLocation,
        map: map,
        
    });
    
}




