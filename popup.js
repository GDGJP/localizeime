
onload = function() {

function log(str) {
logEl.value = str+"\n"+logEl.value;
}

function changeProperty(property, isCssAttribute, e) {

}

function handlePermissionRequest(e) {
var allowed = false;
if (e.permission==='pointerLock' || e.permission==='media' ||
e.permission==='geolocation') {
allowed = true;
     e.request.allow();
   } else {
   e.request.deny();
   }
}


localize.addEventListener('permissionrequest', handlePermissionRequest);

}