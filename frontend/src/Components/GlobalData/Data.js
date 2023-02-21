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

export function calculateCompetencyPercentage(data) {
    const total = data.length;
    const fundamentalCount = data.filter((item) => item.competency_level === '1').length;
    const noviceCount = data.filter((item) => item.competency_level === '2').length;
    const intermediateCount = data.filter((item) => item.competency_level === '3').length;
    const advancedCount = data.filter((item) => item.competency_level === '4').length;
    const expertCount = data.filter((item) => item.competency_level === '5').length;
  
    const fundamentalPercentage= fundamentalCount > 0 ? (fundamentalCount / total) * 100 : 0;
    const novicePercentage = noviceCount > 0 ? (noviceCount / total) * 100 : 0;
    const intermediatePercentage = intermediateCount > 0 ? (intermediateCount / total) * 100 : 0;
    const advancedPercentage =  advancedCount ? (advancedCount / total) * 100 : 0;
    const expertPercentage = expertCount > 0 ? (expertCount / total) * 100 : 0;

    return { fundamentalPercentage, novicePercentage, intermediatePercentage, advancedPercentage, expertPercentage };
  }

 export function calculateTextDirectionalityPercentage(data) {
    const total = data.length;
    const leftToRightCount = data.filter((item) => item.text_directionality === 'right-to-left').length;
    const RightToLeftCount = data.filter((item) => item.text_directionality === 'left-to-right').length;
  
    const leftToRightPercentage= leftToRightCount > 0 ? (leftToRightCount / total) * 100 : 0;
    const rightToLeftPercentage = RightToLeftCount > 0 ? (RightToLeftCount / total) * 100 : 0;

    return { leftToRightPercentage, rightToLeftPercentage};
  }

  export function calculateInternetAccessPercentage(data) {
    const total = data.length;
    const internetCount = data.filter((item) => item.internet_stability === 'yes').length;
    const noInternetCount = data.filter((item) => item.internet_stability === 'no').length;

    const internetPercentage= internetCount > 0 ? (internetCount / total) * 100 : 0;
    const noInternetPercentage = noInternetCount > 0 ? (noInternetCount / total) * 100 : 0;

    return { internetPercentage, noInternetPercentage};
  }

  export function calculateDeviceSharingPercentage(data) {
    const total = data.length;
    const deviceSharing = data.filter((item) => item.device_sharing_status === 'yes').length;
    const noDeviceSharing = data.filter((item) => item.device_sharing_status === 'no').length;

    const deviceSharingPercentage= deviceSharing > 0 ? (deviceSharing / total) * 100 : 0;
    const noDeviceSharingPercentage = noDeviceSharing > 0 ? (noDeviceSharing / total) * 100 : 0;

    return { deviceSharingPercentage, noDeviceSharingPercentage};
  }
