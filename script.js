let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

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

// 🔢 لیست کامل 89 شغل قانونی و معتبر در ایران
const allJobs = [
    // دفتری
    { type: 'office', name: 'حسابدار', skills: ['numbers'] },
    { type: 'office', name: 'منشی', skills: ['people'] },
    { type: 'office', name: 'مدیریت', skills: ['people', 'tech'] },
    { type: 'office', name: 'تحصیلات تکمیلی', skills: ['creative'] },
    { type: 'office', name: 'حقوق دان', skills: ['numbers'] },
    { type: 'office', name: 'بازاریابی داخلی', skills: ['people', 'creative'] },
    { type: 'office', name: 'کارشناس HR', skills: ['people'] },
    { type: 'office', name: 'مدیر فروش', skills: ['people', 'numbers'] },
    { type: 'office', name: 'کارشناس کنترل کیفیت', skills: ['numbers'] },
    { type: 'office', name: 'مدیر پروژه', skills: ['people', 'tech'] },

    // دورکاری
    { type: 'remote', name: 'نویسندگی وبلاگ', skills: ['creative'] },
    { type: 'remote', name: 'ترجمه', skills: ['creative', 'tech'] },
    { type: 'remote', name: 'طراحی گرافیک', skills: ['creative'] },
    { type: 'remote', name: 'دیجیتال مارکتینگ', skills: ['tech', 'creative'] },
    { type: 'remote', name: 'ویراستاری', skills: ['creative'] },
    { type: 'remote', name: 'کارشناس SEO', skills: ['tech'] },
    { type: 'remote', name: 'محتوا ساز', skills: ['creative'] },
    { type: 'remote', name: 'مدرس آنلاین', skills: ['people', 'creative'] },
    { type: 'remote', name: 'مدیر شبکه‌های اجتماعی', skills: ['tech', 'creative'] },
    { type: 'remote', name: 'کارشناس رسانه', skills: ['creative'] },

    // فریلنسری
    { type: 'freelance', name: 'برنامه‌نویسی', skills: ['tech'] },
    { type: 'freelance', name: 'فیلمبرداری', skills: ['creative'] },
    { type: 'freelance', name: 'طراحی وب', skills: ['tech', 'creative'] },
    { type: 'freelance', name: 'فروش آنلاین', skills: ['people', 'tech'] },
    { type: 'freelance', name: 'توسعه برنامه موبایل', skills: ['tech'] },
    { type: 'freelance', name: 'کارشناس هوش مصنوعی', skills: ['tech'] },
    { type: 'freelance', name: 'طراح لوگو', skills: ['creative'] },
    { type: 'freelance', name: 'نویسنده مستقل', skills: ['creative'] },
    { type: 'freelance', name: 'متون تبلیغاتی', skills: ['creative'] },
    { type: 'freelance', name: 'کارشناس امنیت اطلاعات', skills: ['tech'] },

    // استارت‌آپ
    { type: 'startup', name: 'توسعه محصول', skills: ['tech', 'people'] },
    { type: 'startup', name: 'بازاریابی دیجیتال', skills: ['tech', 'creative'] },
    { type: 'startup', name: 'UX/UI طراحی', skills: ['creative'] },
    { type: 'startup', name: 'تحلیل داده', skills: ['numbers', 'tech'] },
    { type: 'startup', name: 'مدیر پروژه', skills: ['people'] },
    { type: 'startup', name: 'نوآوری شرکت‌های دانش‌بنیان', skills: ['creative', 'tech'] },
    { type: 'startup', name: 'کارشناس تحقیق و توسعه', skills: ['tech', 'creative'] },
    { type: 'startup', name: 'راه‌انداز استارت‌آپ', skills: ['creative', 'people'] },
    { type: 'startup', name: 'کارشناس فناوری', skills: ['tech'] },
    { type: 'startup', name: 'مدیر رسانه‌های اجتماعی', skills: ['creative', 'tech'] },

    // دفتری اضافی
    { type: 'office', name: 'کارشناس فروش', skills: ['people'] },
    { type: 'office', name: 'کارشناس خدمات مشتری', skills: ['people'] },
    { type: 'office', name: 'مدیر مالی', skills: ['numbers', 'tech'] },
    { type: 'office', name: 'کارشناس حقوقی', skills: ['numbers'] },
    { type: 'office', name: 'کارشناس امور عمومی', skills: ['people'] },
    { type: 'office', name: 'کارشناس فناوری اطلاعات', skills: ['tech'] },
    { type: 'office', name: 'کارشناس بازاریابی', skills: ['creative', 'people'] },
    { type: 'office', name: 'مدیر اجرایی', skills: ['people'] },
    { type: 'office', name: 'کارشناس منابع انسانی', skills: ['people'] },
    { type: 'office', name: 'کارشناس آموزش', skills: ['people', 'creative'] },

    // دورکاری اضافی
    { type: 'remote', name: 'کارشناس تحلیل داده', skills: ['numbers', 'tech'] },
    { type: 'remote', name: 'کارشناس رسانه', skills: ['creative'] },
    { type: 'remote', name: 'مترجم زبان انگلیسی', skills: ['creative', 'tech'] },
    { type: 'remote', name: 'کارشناس مدیریت پروژه', skills: ['tech', 'people'] },
    { type: 'remote', name: 'کارشناس روابط عمومی', skills: ['people'] },
    { type: 'remote', name: 'کارشناس تولید محتوا', skills: ['creative'] },
    { type: 'remote', name: 'کارشناس طراحی UI/UX', skills: ['creative', 'tech'] },
    { type: 'remote', name: 'کارشناس امنیت اطلاعات', skills: ['tech'] },
    { type: 'remote', name: 'کارشناس فناوری اطلاعات', skills: ['tech'] },
    { type: 'remote', name: 'کارشناس تبلیغات دیجیتال', skills: ['creative', 'tech'] },

    // فریلنسری اضافی
    { type: 'freelance', name: 'کارشناس تحلیل سئو', skills: ['tech'] },
    { type: 'freelance', name: 'کارشناس رسانه‌های اجتماعی', skills: ['tech', 'creative'] },
    { type: 'freelance', name: 'کارشناس طراحی لوگو', skills: ['creative'] },
    { type: 'freelance', name: 'کارشناس تست نرم‌افزار', skills: ['tech'] },
    { type: 'freelance', name: 'کارشناس فروش دیجیتال', skills: ['people', 'tech'] },
    { type: 'freelance', name: 'کارشناس روابط عمومی دیجیتال', skills: ['people', 'creative'] },
    { type: 'freelance', name: 'کارشناس تولید محتوا', skills: ['creative'] },
    { type: 'freelance', name: 'کارشناس امنیت اطلاعات', skills: ['tech'] },
    { type: 'freelance', name: 'کارشناس طراحی انیمیشن', skills: ['creative'] },
    { type: 'freelance', name: 'کارشناس افزونه مرورگر', skills: ['tech'] },

    // استارت‌آپ اضافی
    { type: 'startup', name: 'کارشناس تحقیقات بازار', skills: ['creative', 'numbers'] },
    { type: 'startup', name: 'کارشناس استراتژی', skills: ['tech', 'people'] },
    { type: 'startup', name: 'کارشناس رشد شرکت', skills: ['creative', 'tech'] },
    { type: 'startup', name: 'کارشناس ارتباطات', skills: ['people'] },
    { type: 'startup', name: 'کارشناس ایده‌پردازی', skills: ['creative'] },
    { type: 'startup', name: 'کارشناس انتشارات دیجیتال', skills: ['creative'] },
    { type: 'startup', name: 'کارشناس ارتقاء فرهنگ سازمانی', skills: ['people'] },
    { type: 'startup', name: 'کارشناس تحلیل رفتار کاربر', skills: ['tech', 'numbers'] },
    { type: 'startup', name: 'کارشناس تولید محتوا', skills: ['creative'] },
    { type: 'startup', name: 'کارشناس امنیت داده', skills: ['tech'] }
];

function submitForm() {
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const interest = document.getElementById('interest').value;

    const tech = document.getElementById('tech').checked;
    const creative = document.getElementById('creative').checked;
    const people = document.getElementById('people').checked;
    const numbers = document.getElementById('numbers').checked;

    let selectedJobs = interest === 'all' ? [...allJobs] : allJobs.filter(job => job.type === interest);

    if (tech || creative || people || numbers) {
        selectedJobs = selectedJobs.filter(job => {
            return (!tech || job.skills.includes('tech')) &&
                   (!creative || job.skills.includes('creative')) &&
                   (!people || job.skills.includes('people')) &&
                   (!numbers || job.skills.includes('numbers'));
        });
    }

    const skillType = [tech ? 'فنی' : '', creative ? 'خلاقیت' : '', people ? 'روانشناسی' : '', numbers ? 'مالی' : ''].filter(Boolean).join(', ');

    const resultsDiv = document.getElementById('results');
    const jobList = document.getElementById('jobList');
    const resume = document.getElementById('resume');

    jobList.innerHTML = '';
    selectedJobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = job.name;
        jobList.appendChild(li);
    });

    const resumeText = `
نام: [نام شما]
سن: ${age}
منطقه: ${location}
سابقه کار: ${experience === 'yes' ? 'دارد' : 'ندارد'}
علاقه شغلی: ${interest === 'office' ? 'دفتری' :
              interest === 'remote' ? 'دورکاری' :
              interest === 'freelance' ? 'فریلنسری' :
              interest === 'startup' ? 'استارت‌آپ' : 'همه'}
مهارت‌ها: ${skillType || 'مشخص نشده'}
پیشنهاد شغلی: ${selectedJobs.map(j => j.name).join(', ') || 'ندارد'}
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
    document.getElementById('welcomeMessage').style.display = 'block';
}