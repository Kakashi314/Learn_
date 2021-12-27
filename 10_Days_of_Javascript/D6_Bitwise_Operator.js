function getMaxLessThanK(n, k){
    let maxneed=0;
    for(let i =1;i<n+1;i++){
        for(let j=i+1;j<n+1;j++){
            
                let x=i &j;
                if(x<k){
                   if(x>maxneed){
                       maxneed=x
                   }
                }
            
            
    
        }
        
    }
    
    return maxneed;
    }