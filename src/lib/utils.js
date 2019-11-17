let local = {
   save (key,value){
   	  localStorage.setItem(key,JOSN.stringify(value));
   },
   fetch(key){
    	return JOSN.parse(localStorage.getItem(key)) || {};
   }
}

export default {
	install:function(vm){
		 vm.prototype.$local = local;
	}
}