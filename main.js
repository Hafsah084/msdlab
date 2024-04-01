
function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        years--;
        months += 12;
    }

  
    if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, dob.getDate());
        days = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
        months--;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}


const dateOfBirth = '1990-05-15'; 
const age = calculateAge(dateOfBirth);
console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days`);


