const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  //console.log(mockUpStrand())
  const PAeuorFactory = (specimenNum,dna) =>{
    let obje={
      _specimenNum: specimenNum,
      _dna: dna,
      mutate: function(){
        //console.log("before: "+this._dna)
        let randNum = Math.floor(Math.random() * this._dna.length);
        let randword =this._dna[randNum];
        while (randword===this._dna[randNum]){
          randword = returnRandBase()
        }
        this._dna[randNum] = randword;
        //console.log("after: "+this._dna)
      },
      compareDNA: function(pasdna){
        //console.log(this._dna)
        let div = this._dna.length;
        let x = 0;
        for (let i=0; i<div;i++){
          if (this._dna[i]===pasdna[i]){
            x +=1;
          }
        }
        let porciento = 100*(x/div);
        console.log(`specimen #1 and specimen #2 have ${porciento}% DNA in common`)
      },
      willLikelySurvive:function(){
        let div = this._dna.length;
        let numc=0;
        let numg=0;
        for (i=0;i<div;i++){
          if (this._dna[i]==="C"){
            numc+=1;
          }else if (this._dna[i]==="G"){
            numg+=1;
          }
        }
        //console.log((numc/div)*100,(numg/div)*100)
        if ((numc/div)*100>=60 || (numg/div)*100>=60){
          return true
        }else{
          return false
        }
      }
    }
    return obje
  }
  
  
  //obj1=PAeuorFactory(2,mockUpStrand())
  //obj2=obj1.mutate()
  //obj1.compareDNA(mockUpStrand())
  //console.log(obj1.willLikelySurvive())
  
  let instalncesTir=[]
  for (let i=0;i<30;i++){
    let obj={};
    obj=PAeuorFactory(i+1,mockUpStrand());
    //console.log(obj)
    //console.log(obj.willLikelySurvive())
    while (!obj.willLikelySurvive()){
      obj.mutate()
    //  aux +=1;
    }
    //console.log(obj.willLikelySurvive())
    instalncesTir.push(obj)
}
  console.log(instalncesTir)