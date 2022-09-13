function classPhotos(RSH, BSH) {
    RSH.sort((a, b) => b - a);
    BSH.sort((a, b) => b - a);
    const firstRowRed = RSH[0] < BSH[0] ? true : false;
    for (let idx = 0; idx < RSH.length; idx++) {
        const RH = RSH[idx];
        const BH = BSH[idx];
        if (firstRowRed) {
            if (RH >= BH) return false
        } else if (BH >= RH) return false;
    }
    return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;