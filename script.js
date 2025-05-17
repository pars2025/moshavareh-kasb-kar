let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

// Show welcome message on load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('welcomeMessage').style.display = 'block';
});

function startForm() {
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('stepForm').style.display = 'block';
    formSteps[0].classList.add('active');
}

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
    }
}

function prevStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
    }
}

function submitForm() {
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const interest = document.getElementById('interest').value;

    const tech = document.getElementById('tech').checked;
    const creative = document.getElementById('creative').checked;
    const people = document.getElementById('people').checked;
    const numbers = document.getElementById('numbers').checked;

    const jobSuggestions = {
        office: ['حسابدار', 'منشی', 'مدیریت'],
        remote: ['نویسندگی', 'ترجمه', 'طراحی گرافیک'],
        freelance: ['برنامه‌نویسی', 'فروش آنلاین', 'فیلمبرداری'],
        startup: ['توسعه محصول', 'بازاریابی دیجیتال', 'UX/UI']
    };

    const resources = {
        office: ['https://example.com/accounting-course ', 'https://example.com/secretary-course '],
        remote: ['https://example.com/writing-course ', 'https://example.com/translation-course '],
        freelance: ['https://example.com/web-development-course ', 'https://example.com/social-media-marketing '],
        startup: ['https://example.com/product-management-course ', 'https://example.com/uiux-course ']
    };

    const selectedJobs = jobSuggestions[interest] || [];
    const selectedResources = resources[interest] || [];

    // Show results
    const resultsDiv = document.getElementById('results');
    const jobList = document.getElementById('jobList');
    const resourceList = document.getElementById('resources');
    const resume = document.getElementById('resume');

    jobList.innerHTML = '';
    selectedJobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = job;
        jobList.appendChild(li);
    });

    resourceList.innerHTML = '';
    selectedResources.slice(0, 2).forEach(url => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = url;
        a.target = '_blank';
        li.appendChild(a);
        resourceList.appendChild(li);
    });

    // Resume
    const skillType = [tech ? 'فنی' : '', creative ? 'خلاقیت' : '', people ? 'روانشناسی' : '', numbers ? 'مالی' : ''].filter(Boolean).join(', ');

    const resumeText = `
نام: [نام شما]
سن: ${age}
منطقه: ${location}
سابقه کار: ${experience === 'yes' ? 'دارد' : 'ندارد'}
علاقه شغلی: ${interest === 'office' ? 'دفتری' :
              interest === 'remote' ? 'دورکاری' :
              interest === 'freelance' ? 'فریلنسری' : 'استارت‌آپ'}
مهارت‌ها: ${skillType || 'مشخص نشده'}
پیشنهاد شغلی: ${selectedJobs[0] || 'ندارد'}
    `;

    resume.textContent = resumeText;
    localStorage.setItem('lastResume', resumeText);

    document.getElementById('stepForm').style.display = 'none';
    resultsDiv.style.display = 'block';
    document.querySelector('.about-section').style.display = 'block';
}

function printResume() {
    window.print();
}

function downloadResume() {
    const resumeText = document.getElementById('resume').textContent;
    const blob = new Blob([resumeText], {type: 'text/plain'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'رزومه_شخصی.txt';
    link.click();
}

function restart() {
    currentStep = 0;
    formSteps.forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });
    document.getElementById('results').style.display = 'none';
    document.getElementById('stepForm').style.display = 'block';
    document.querySelector('.about-section').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'none';
}