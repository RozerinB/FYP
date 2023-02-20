// Overall highest rated principles
export function UDP(principles) {
    let countMap = new Map();
    let maxCount = 0;
    let maxCountKeys = [];

    // loop through each object in array
    for (let obj of principles) {
    // loop through each key in the object
    for (let key in obj) {
        if (obj[key] === 1) {
        let count = countMap.get(key) || 0; // get current count for the key or default to 0
        count++; // increment count
        countMap.set(key, count); // update count in map
        if (count > maxCount) { // update max count and keys if necessary
            maxCount = count;
            maxCountKeys = [key];
        } else if (count === maxCount) { // add key to max count keys if it has the same count
            maxCountKeys.push(key);
        }
        }
    }
    }
    return maxCountKeys;
}

export function UDPbyGender(participants,principleName,principleValue) {
    const filteredParticipants = participants.filter(user => user.design_principles[principleName] === principleValue);

    const userCountByGender = filteredParticipants.reduce((acc, user) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
    }, {});

    const totalParticipants = filteredParticipants.length;
    const percentByGender = {};
    for (const gender in userCountByGender) {
    const count = userCountByGender[gender];
    const percent = count / totalParticipants * 100;
    percentByGender[gender] = percent.toFixed(2) ;
    }

    return percentByGender;
}

function calculateCompetencyPercentage(data) {
    const total = data.length;
    const fundamentalCount = data.filter((item) => item.competency_level === '1').length;
    const noviceCount = data.filter((item) => item.competency_level === '2').length;
    const intermediateCount = data.filter((item) => item.competency_level === '3').length;
    const advancedCount = data.filter((item) => item.competency_level === '4').length;
    const expertCount = data.filter((item) => item.competency_level === '5').length;
  
    const fundamentalPercentage= (fundamentalCount / total) * 100;
    const novicePercentage = (noviceCount / total) * 100;
    const intermediatePercentage = (intermediateCount / total) * 100;
    const advancedPercentage = (advancedCount / total) * 100;
    const expertPercentage = (expertCount / total) * 100;
  
    return { fundamentalPercentage, novicePercentage, intermediatePercentage, advancedPercentage, expertPercentage };
  }