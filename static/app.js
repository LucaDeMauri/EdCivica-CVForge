// Tipi di consolidare
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const strRegex =  /^[a-zA-Z\s]*$/; 
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
    DATE: 'date',
}

// Inseriemnto nei campi nella parte delle informazioni
let firstnameElem = mainForm.firstname,
    middlenameElem = mainForm.middlename,
    lastnameElem = mainForm.lastname,
    imageElem = mainForm.image,
    birthdateElem = mainForm.birthdate,  
    birthplaceElem = mainForm.birthplace, 
    addressElem = mainForm.address,
    emailElem = mainForm.email,
    phonenoElem = mainForm.phoneno;

// Elementi che vengono mostrati nella preview
let nameDsp = document.getElementById('fullname_dsp'),
    imageDsp = document.getElementById('image_dsp'),
    phonenoDsp = document.getElementById('phoneno_dsp'),
    emailDsp = document.getElementById('email_dsp'),
    addressDsp = document.getElementById('address_dsp'),
    birthdateDsp = document.getElementById('birthdate_dsp'),    
    birthplaceDsp = document.getElementById('birthplace_dsp'),

    educationsDsp = document.getElementById('educations_dsp'),

    experiencesDsp = document.getElementById('experiences_dsp'),

    languagesDsp = document.getElementById('languages_dsp'),

    certificationsDsp = document.getElementById('certifications_dsp'),

    skillsDsp = document.getElementById('skills_dsp'),

    additionalsDsp = document.getElementById('additionals_dsp');

    interestsDsp = document.getElementById('interests_dsp');

const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    for(let i = 0; i < elemsDataCount; i++){
        let dataObj = {}; 

        for(let j = 0; j < elemsAttrsCount; j++){
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
}

const getUserInputs = () => {

    // variabili con cui riempire le liste di dati

    let eduDegreeElem = document.querySelectorAll('.edu_degree_school'),
        eduSchoolElem = document.querySelectorAll('.edu_school_degree'),
        eduAddressElem = document.querySelectorAll('.edu_address_school'),
        eduStartDateElem = document.querySelectorAll('.edu_start_date'),
        eduEndDateElem = document.querySelectorAll('.edu_end_date'),
        eduAdditionalElem = document.querySelectorAll('.edu_additional');

    let expTitleElem = document.querySelectorAll('.exp_title'),
        expOrganizationElem = document.querySelectorAll('.exp_organization'),
        expSectorElem = document.querySelectorAll('.exp_sector'),
        expStartDateElem = document.querySelectorAll('.exp_start_date'),
        expEndDateElem = document.querySelectorAll('.exp_end_date'),
        expAddressElem = document.querySelectorAll('.exp_address'),
        expDescriptionElem = document.querySelectorAll('.exp_description'),
        expAchivmentElem = document.querySelectorAll('.exp_achivment');

    let langTypeElem = document.querySelectorAll('.lang_type'),
        langLvlElem = document.querySelectorAll('.lang_lvl');

    let certNameElem = document.querySelectorAll('.cert_name'),
        certDescriptionElem = document.querySelectorAll('.cert_description');

    let skiNameElem = document.querySelectorAll('.ski_name'),
        skiDescriptionElem = document.querySelectorAll('.ski_description');

    let addVolElem = document.querySelectorAll('.add_vol'),
        addTirElem = document.querySelectorAll('.add_tir'),
        addFormElem = document.querySelectorAll('.add_form'),
        addExtraElem = document.querySelectorAll('.add_extra');

    let interElem = document.querySelectorAll('.inter');

    // Lista da validare
    firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
    phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    birthdateElem.addEventListener('blur', (e) => validateFormData(e.target, validType.DATE, 'Birthdate'));
    birthplaceElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Birthplace'));
    
    eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduAddressElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address')));
    eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.DATE, 'Start Date')));
    eduEndDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.DATE, 'End Date')));
    eduAdditionalElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Additional Info')));

    expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expSectorElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Sector")));
    expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.DATE, 'Start Date')));
    expEndDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.DATE, 'End Date')));
    expAddressElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    expAchivmentElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Achivement')));

    langTypeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Language Type')));
    langLvlElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Language Level')));

    certNameElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Certification Name')));
    certDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Certification Description')));

    skiNameElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Skill Name')));
    skiDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Skill Description')));
    
    addVolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Additional Vol')));
    addTirElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Additional Tir')));
    addFormElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Additional Form')));
    addExtraElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Additional Extra')));
    
    interElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Interests')));

    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        birthdate: birthdateElem.value, 
        birthplace: birthplaceElem.value,
        educations: fetchValues(['edu_degree_school', 'edu_school_degree', 'edu_address_school', 'edu_start_date', 'edu_end_date', 'edu_additional'], eduDegreeElem, eduSchoolElem, eduAddressElem, eduStartDateElem, eduEndDateElem, eduAdditionalElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_sector', 'exp_start_date', 'exp_end_date', 'exp_address','exp_description','exp_achivment'], expTitleElem, expOrganizationElem, expSectorElem, expStartDateElem, expEndDateElem, expAddressElem, expDescriptionElem, expAchivmentElem),
        languages: fetchValues(['lang_type','lang_lvl'], langTypeElem, langLvlElem),
        certifications: fetchValues(['cert_name','cert_description'], certNameElem, certDescriptionElem),
        skills: fetchValues(['ski_name','ski_description'], skiNameElem, skiDescriptionElem),
        additionals: fetchValues(['add_vol','add_tir','add_form','add_extra'], addVolElem, addTirElem, addFormElem, addExtraElem),
        interests: fetchValues(['inter'], interElem)
    }
};

function validateFormData(elem, elemType, elemName){
    // controllo per stringa non vuota
    if(elemType == validType.TEXT){
        if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // controllo per solo stringa
    if(elemType == validType.TEXT_EMP){
        if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // controllo per email
    if(elemType == validType.EMAIL){
        if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // controllo per numero di telefono
    if(elemType == validType.PHONENO){
        if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // controllo se vuoto
    if(elemType == validType.ANY){
        if(elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // controllo data
    if (elemType == validType.DATE) {
        if (!dateRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

function addErrMsg(formElem, formElemName){
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

function removeErrMsg(formElem){
    formElem.nextElementSibling.innerHTML = "";
}

// Funzione che mostra la lista di dati
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for(const key in listItem){
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }

        listContainer.appendChild(itemElem);
    })
}

// Funzione per mostrare nella preview tutte le informazioni inserite
const displayCV = (userData) => {
    nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    birthdateDsp.innerHTML = userData.birthdate;
    birthplaceDsp.innerHTML = userData.birthplace;
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);
    showListData(userData.languages, languagesDsp);
    showListData(userData.certifications, certificationsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.additionals, additionalsDsp);
    showListData(userData.interests, interestsDsp);
}

// Funzione per generare il curriculum
const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}

function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
    }
}

// Funzione per stampare il curriculum
function printCV(){
    window.print();
}


function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function formatDate(dateString) {
    var parts = dateString.split('/');

    var formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
    
    return formattedDate;
}

// Salvare il cv

/*
const sendCVDataToPHP = () => {
    let userData = getUserInputs();
    
    fetch('cv.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
*/
