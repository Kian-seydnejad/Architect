const searchNav = document.getElementById('serachNav');
const searchNavChild = document.getElementById('serachNavChild');
const largeNav = document.getElementById('largeNav');
const setting = document.getElementById('setting');
const using = document.getElementById('using')
const cancel = document.getElementById('cancel');
const project = document.getElementById('project');
const using2 = document.getElementById('using2')
const cancel2 = document.getElementById('cancel2');
const vMenueBtn = document.getElementById('vMenueBtn')
const vMenue = document.getElementById('vMenue')
const vMenueBtnFa = document.getElementById('vMenueBtnFa')
const mainArea = document.getElementById('mainArea')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const email = document.getElementById('email')
const firstName = document.getElementById('firstName')
const userName = document.getElementById('userName')
const passwordFather = document.getElementById('passwordFather')
const confirmPasswordFather = document.getElementById('confirmPasswordFather')
const emailFather = document.getElementById('emailFather')
const firstNameFather = document.getElementById('firstNameFather')
const userNameFather = document.getElementById('userNameFather')
const signupBtn = document.getElementById('singupBtn')
const titleOf = document.getElementById('titleOf')
const titleOfFather = document.getElementById('titleOfFather')


searchNavChild.addEventListener("click", searchInput);
setting.addEventListener("click" , settingMenue)
cancel.addEventListener("click", removeSettingMenue)
project.addEventListener("click" , projectadd)
cancel2.addEventListener("click", removeProject)
vMenueBtn.addEventListener("click", removeVMenue)
signupBtn.addEventListener("click", validateForm);


function searchInput(e) {
    const input = document.createElement('input');
    input.className = 'ml-10 m-1 mt-2 p-2 w-100 rounded-full flex justify-start items-center input bg-gray-100';
    input.placeholder = "Type to search"
    searchNav.appendChild(input)
    const closeBtn = document.createElement('button')
    closeBtn.className = 'bi bi-x-lg text-blue-300 closeBtn'
    largeNav.className = 'hidden'
    searchNav.appendChild(closeBtn)
    searchNavChild.className = 'hidden'
    vMenueBtn.className = 'hidden'
    closeBtn.addEventListener("click", removeSearchInput)
    function removeSearchInput() {
       closeBtn.className = 'hidden'
       input.className = 'hidden'
       largeNav.className = 'flex justify-between ml-5'
       searchNavChild.className = 'bi bi-search ml-10 text-blue-300 static flex justify-end'
       vMenueBtn.className = 'bi bi-sliders ml-10 text-blue-300 fixed mb-5'
       vMenueBtnFa.className = 'ml-5 mb-3'
    }
    e.preventDefault();
  }
function settingMenue(e) {
    using.className = 'shadow-lg bg-white rounded-md mt-7 fixed'
    e.preventDefault();
}
function removeSettingMenue(e) {
    using.className = 'hidden'
    e.preventDefault()
}
function projectadd(e) {
    using2.className = 'shadow-lg bg-white rounded-md mt-7 fixed'
    e.preventDefault();
}
function removeProject(e) {
    using2.className = 'hidden'
    e.preventDefault()
}
function removeVMenue(e) {
    if (vMenue.classList.contains('m-1')) {
        titleOfFather.className = 'hidden'
        titleOf.className = 'hidden'
        vMenue.className = 'hidden'
        vMenueBtn.className = 'bi bi-x-lg text-blue-300'
        vMenueBtnFa.className = 'mb-0 mt-1'
        vMenue.classList.remove('m-1');
        mainArea.className = 'mt-10 p-5 sm:col-span-12 col-span-12'
    }
    else{
        titleOfFather.className = 'ml-3 mt-1'
        titleOf.className = 'text-3xl font-bold something ml-3'
        vMenueBtnFa.className = 'ml-5 mb-3'
        vMenue.className = 'hidden sm:block p-3 bg-white border-right border-black col-span-3 mt-7 m-1'
        vMenueBtn.className = 'bi bi-sliders ml-10 text-blue-300 fixed '
        mainArea.className = 'mt-10 p-5 sm:col-span-9 col-span-12'
    }
    e.preventDefault()
}
function validateForm(e) {
  const passwordError = document.querySelector('.errorText');
  const confirmPasswordError = document.querySelector('.errorText1');
  const emailError = document.querySelector('.errorText2');
  const userNameError = document.querySelector('.errorText3');
  const firstNameError = document.querySelector('.errorText4');



  if (password.value === "" && !passwordError) {
    const label = document.createElement('label');
    label.innerHTML = 'Please provide a password';
    label.className = 'italic col-12 col-span-12 text-red-500 text-xs errorText';
    passwordFather.appendChild(label);
    password.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-red-400';
  } else if (password.value !== "" && passwordError) {
    passwordError.remove();
    password.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-gray-400';
  }



  if (confirmPassword.value === "" && !confirmPasswordError) {
    const label1 = document.createElement('label');
    label1.innerHTML = 'Please provide a password';
    label1.className = 'italic col-12 col-span-12 text-red-500 text-xs errorText1';
    confirmPasswordFather.appendChild(label1);
    confirmPassword.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-red-400';
  } else if (confirmPassword.value !== "" && confirmPasswordError) {
    confirmPasswordError.remove();
    confirmPassword.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-gray-400';
  }



  if (email.value === "" && !emailError) {
    const label2 = document.createElement('label');
    label2.innerHTML = 'Please enter a valid email address';
    label2.className = 'italic col-12 col-span-12 text-red-500 text-xs errorText2';
    emailFather.appendChild(label2);
    email.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-red-400';
  } else if (email.value !== "" && emailError) {
    emailError.remove();
    email.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-gray-400';
  }



  if (userName.value === "" && !userNameError) {
    const label3 = document.createElement('label');
    label3.innerHTML = 'Please enter a username';
    label3.className = 'italic col-12 col-span-12 text-red-500 text-xs errorText3';
    userNameFather.appendChild(label3);
    userName.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-red-400';
  } else if (userName.value !== "" && userNameError) {
    userNameError.remove();
    userName.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-gray-400';
  }



  if (firstName.value === "" && !firstNameError) {
    const label4 = document.createElement('label');
    label4.innerHTML = 'Please enter your firstname';
    label4.className = 'italic col-12 col-span-12 text-red-500 text-xs errorText4';
    firstNameFather.appendChild(label4);
    firstName.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-red-400';
  } else if (firstName.value !== "" && firstNameError) {
    firstNameError.remove();
    firstName.className = 'text-lg col-span-12 border rounded p-1 mt-2 border-gray-400';
  }

  

  e.preventDefault();
}








  

