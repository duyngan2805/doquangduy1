const PT2= (a,b,c)=>{
    if(a==0){
        if(b==0){
            console.log("");
            return;
        }
        let x3 = -c/b
        console.log(`Phương trình có 1 nghiệm là ${x3}`)
        return;
    }
    let delta = (b*b)-(4*a*c)
    const denta = Math.sqrt(delta)
    if(delta<0){
        console.log('pt vo nghiem')
    }
    let x = -b/(2*a)
    if(delta == 0){
        console.log(`phuong trinh co nghiem kep ${x}`)
    }
    let x1 = (-b + denta) / (2*a)
    let x2 = (-b - denta) / (2*a)
    if(delta > 0){
        console.log(`Phương trình có 2 nghiệm là ${x1} và ${x2}`)
    }
}

