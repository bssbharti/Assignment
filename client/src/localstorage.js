export const loadState = () =>{
     try{
          const serializerState =  window.loaclStorage.getItem('state');
          if(serializerState === null){
               return undefined;
          }
          return JSON.parse(serializerState);
     }
     catch(err){
          return undefined;
     }
}
export const saveState = (state) =>{
     try{
          const serializerState = JSON.stringify(state);
           window.loaclStorage.setItem('state',serializerState);
     }
     catch(err){
     }
}
