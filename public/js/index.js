
const surName = documnet.studentsregister.surname;
const givenName = document.studentsregister.givenname;
const Title = document.studentsregister.title;
const Picture = document.studentsregister.picture;
const Male = document.getElementById('male');
const Female = document.getElementById('female');
const Dob = document.studentsregister.dob;
const Country = document.studentsregister.country;
const Residence = document.studentsregister.residence;
const Nationality = document.studentsregister.nationality;



const surNameERROR = document.getElementById('surname-error');
const givenNameERROR = document.getElementById('givenname-error');
const genderError = document.getElementById('gender-error');
const DobError = document.getElementById('dob-error');
const countryError = document.getElementById('contry-error');
const residenceError = document.getElementById('residence-error');
const nationalityError = document.getElementById('nationality-error');





const validate = (event) => {

    const isValid = true;
    if (!isValid) {
        event.preventDefault();
        return false
    }
}

const studentForm = document.getElementById('form-id');
studentForm.addEventListener('submit', (event) => {
    validate(event);
})