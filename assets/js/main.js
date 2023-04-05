
const toggleHeader = () => {
    let previousScrollPosition = 0;
    const headerZone = 200;
    const header = document.getElementById('header');
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (scrollPosition() > previousScrollPosition && scrollPosition() > headerZone) header.classList.add('hide');
        else if (scrollPosition() < previousScrollPosition) header.classList.remove('hide');
        previousScrollPosition = scrollPosition();
    })
}

const clickToggle = () => {
    const budget = document.getElementById('budget');
    const contract = document.getElementById('contract');
    const toggle = document.getElementById('toggle');
    const budgetInfo = document.querySelectorAll('.budget-info');
    const contractInfo = document.querySelectorAll('.contract-info');

    const budgetContainsActive = () => budget.classList.contains('active');
    const contractContainsActive = () => contract.classList.contains('active');
    const toggleContainsActive = () => toggle.classList.contains('active');

    budget.addEventListener('click', () => {
        if (!budgetContainsActive()) budget.classList.add('active');
        if (contractContainsActive()) contract.classList.remove('active');
        if (toggleContainsActive()) toggle.classList.remove('active');
        budgetInfo.forEach(info => {
            if (!info.classList.contains('show')) info.classList.add('show');
        });
        contractInfo.forEach(info => {
            if (info.classList.contains('show')) info.classList.remove('show');
        });
    });

    contract.addEventListener('click', () => {
        if (!contractContainsActive()) contract.classList.add('active');
        if (budgetContainsActive()) budget.classList.remove('active');
        if (!toggleContainsActive()) toggle.classList.add('active');
        budgetInfo.forEach(info => {
            if (info.classList.contains('show')) info.classList.remove('show');
        });
        contractInfo.forEach(info => {
            if (!info.classList.contains('show')) info.classList.add('show');
        });
    });

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        budget.classList.toggle('active');
        contract.classList.toggle('active');
        budgetInfo.forEach(info => {info.classList.toggle('show')});
        contractInfo.forEach(info => {info.classList.toggle('show')});
    });
}

toggleHeader();
clickToggle();

