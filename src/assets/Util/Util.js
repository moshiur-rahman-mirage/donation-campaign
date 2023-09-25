

const getStoredDonation=()=>{
    const storedDonation=localStorage.getItem('donation')
    if (storedDonation){
        return JSON.parse(storedDonation)
    }
    return []
}

const saveDonation=id=>{
    const storedDonation=getStoredDonation();
    const present=storedDonation.find(donationId =>donationId===id)
    if (!present){
        storedDonation.push(id)
        localStorage.setItem('donation',JSON.stringify(storedDonation))
    }
}

export {saveDonation,getStoredDonation}