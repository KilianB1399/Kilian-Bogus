// scripts.js
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    const months = (today.getMonth() - birthDate.getMonth() + 12) % 12;
    const days = today.getDate() - birthDate.getDate();

    return {
        years: age,
        months: months,
        days: days >= 0 ? days : days + new Date(today.getFullYear(), today.getMonth(), 0).getDate(),
    };
}

const birthdate = '2008-10-13';
const age = calculateAge(birthdate);

document.getElementById('age').textContent = `${age.years} Jahre, ${age.months} Monate, ${age.days} Tage`;

document.getElementById('profile-image').onclick = function() {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImage.src = this.src;
};

document.querySelector('.close').onclick = function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
};

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
