import React from 'react'
import { useParams } from 'react-router-dom'
import CandidateService from '../services/CandidateService'
import { useState, useEffect } from 'react'

export default function CandidateDetail() {

    let { id } = useParams()
    const [candidate, setCandidate] = useState({})

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidateByCv(id).then(result => setCandidate(result.data.data))
    }, [])
    console.log(candidate)
    return (
        <div>
            <div class="ui segment">
                <div class="ui two column very relaxed grid">

                    <div class="column">
                        <p>Ad</p>
                        <p>Soyad</p>
                        <p>Kimlik</p>
                        <p>E-mail</p>
                        <p>Şifre</p>
                        <p>Firma Adı</p>
                        <p>Pozisyon</p>
                        <p>Yabancı Dil</p>
                        <p>Seviye</p>
                        <p>Okul Adı</p>
                        <p>Bölüm Adı</p>
                        <p>Programlama Dili</p>
                        <p>Seviye</p>
                    </div>
                    <div class="column">
                        {candidate.candidate&&<p>{candidate.candidate.firstName}</p>}
                        {candidate.candidate&&<p>{candidate.candidate.lastName}</p>}
                        {candidate.candidate&&<p>{candidate.candidate.identityNumber}</p>}
                        {candidate.candidate&&<p>{candidate.candidate.email}</p>}
                        {candidate.candidate&&<p>{candidate.candidate.password}</p>}
                        <p>{candidate.jobFirmName}</p>
                        
                        <p>{candidate.jobPosition}</p>
                        <p>{candidate.foreignLanguageName}</p>
                        <p>{candidate.foreignLanguageLevel}</p>
                        <p>{candidate.educationSchoolName}</p>
                        <p>{candidate.educationDepartment}</p>
                        <p>{candidate.programmingLanguageName}</p>
                        <p>{candidate.programmingLanguageLevel}</p>
                      


                    </div>

                </div>
                <div class="ui vertical divider">

                </div>
            </div>
        </div>
    )
}
