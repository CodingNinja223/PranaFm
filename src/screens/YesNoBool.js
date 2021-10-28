const customBool={
    YES:"YES",
    NO:"NO"
}


class YesNoBool{
    constructor(shouldBeYes = false){
        this.value=shouldBeYes ? customBool.YES : customBool.NO
    }




  flip(){
      this.setValue(this.value === customBool.NO);
      return this;
  }

  setValue(newValue){
      if(typeof newValue === "boolean"){
          this.value = newValue ? customBool.YES : customBool.NO
      }
      return this;
  }
}

export default YesNoBool;