import {CURL,SCURL} from '../constants/ClassifyCont';


export default {
  getlist:function(cb){
    fetch(CURL).then((data)=>{
      data.json().then((data)=>{
        cb(data);
      })
    })
  },
  getgoods:function(cb){
    fetch(SCURL).then((data)=>{
      data.json().then((data)=>{
        cb(data);
      })
    })
  }
};
