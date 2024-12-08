let main = document.getElementById('main');
let ship = document.getElementById('ship');
let mast = document.getElementById('sails');
let sail1 = document.getElementById('sail1');
let sail2 = document.getElementById('sail2');

main.addEventListener('click', function() {
    main.innerHTML = "Поехали!";
    let mast_anim = mast.animate([
        { transform: 'rotate(-90deg)' },
        { transform: 'rotate(0deg)' },
    ], 400);
    
    let sail1_anim = sail1.animate([
        { transform: 'scaleY(0)' },
        { transform: 'scaleY(1)' },
    ], 700);
    
    let sail2_anim = sail2.animate([
        { transform: 'scaleY(0)' },
        { transform: 'scaleY(1)' },
    ], 700);
    
    main.style.animation = 'round 3s'; 
    setTimeout(() => {
        main.style.borderRadius = "15px 15px 100px 100px";
    }, 595);
    
    mast_anim.addEventListener('finish', function() {
        mast.style.transform = 'rotate(0deg)';
    });
    
    sail1_anim.addEventListener('finish', function() {
        sail1.style.transform = 'scaleY(1)';
    });
    
    sail2_anim.addEventListener('finish', function() {
        sail2.style.transform = 'scaleY(1)';
    });
    
    setTimeout(() => {
        let ship_anim = ship.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(2000px)' },
        ], 3000);
        
        ship_anim.addEventListener('finish', function() {
            ship.style.transform = 'translateX(2000px)';
        });
    }, 1200);
});