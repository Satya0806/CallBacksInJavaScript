import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(getSyncData());

getDataUsingPromise().then(
  (data) => {
    console.log('resolve::'+data);
  },
  (rejectReason) => {
    console.log('reject:::'+rejectReason)
  }
);

console.log('st 3');

function resultHandler(data){
  console.log('response', data);
}

function errorHandlerCallBack(error){

  console.log('Error from Async Function:',error.message);

}

function getSyncData(){

  return 'Sync Data';
}

function getDataUsingPromise(){

  const shouldReject = Math.round(Math.random())

return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(shouldReject){

       reject('Promise could not be fulfilled!!!')
    }else{

    resolve('Promise is fulfilled')
    }
  }, 3000);
});

}
