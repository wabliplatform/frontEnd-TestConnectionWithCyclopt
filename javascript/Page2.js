let apiFormApi = new TempApi.FormApi();import TempApi from '../src/index';document.getElementById('ibsg').onclick = () => {let formId = window.location.pathname.replace('/Page2/','');apiFormApi.getform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = formName]').textContent = response.body.query.formName ;}});};