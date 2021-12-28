import React from 'react'
import { useParams } from 'react-router-dom'
import CandidateService from '../services/CandidateService'
import { useState, useEffect } from 'react'
import { Label, Image } from 'semantic-ui-react'

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
            <a class="ui label" >Aday Cv Bilgileri</a>
            <a class="ui basic image label">
                <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2018/01/02/09/40/woman-3055827_960_720.jpg" />
                {candidate.candidate && candidate.candidate.firstName}
            </a>
            <a class="ui label" style={{marginLeft:"600px"}}>
                <i class="mail icon"></i> 23
            </a>
            <div class="ui segment">

                <div class="ui two column very relaxed grid">

                    <div class="column">

                        <p>Ad</p>
                        <div class="ui inverted divider"></div>
                        <p>Soyad</p>
                        <div class="ui inverted divider"></div>
                        <p>Kimlik</p>
                        <div class="ui inverted divider"></div>
                        <p>E-mail</p>
                        <div class="ui inverted divider"></div>
                        <p>Şifre</p>
                        <div class="ui inverted divider"></div>
                        <p>Firma Adı</p>
                        <div class="ui inverted divider"></div>
                        <p>Pozisyon</p>
                        <div class="ui inverted divider"></div>
                        <p>Yabancı Dil</p>
                        <div class="ui inverted divider"></div>
                        <p>Seviye</p>
                        <div class="ui inverted divider"></div>
                        <p>Okul Adı</p>
                        <div class="ui inverted divider"></div>
                        <p>Bölüm Adı</p>
                        <div class="ui inverted divider"></div>
                        <p>Programlama Dili</p>
                        <div class="ui inverted divider"></div>
                        <p>Seviye</p>
                    </div>

                    <div class="column">
                        {candidate.candidate && <p>{candidate.candidate.firstName}</p>}
                        <div class="ui inverted divider"></div>
                        {candidate.candidate && <p>{candidate.candidate.lastName}</p>}
                        <div class="ui inverted divider"></div>
                        {candidate.candidate && <p>{candidate.candidate.identityNumber}</p>}
                        <div class="ui inverted divider"></div>
                        {candidate.candidate && <p>{candidate.candidate.email}</p>}
                        <div class="ui inverted divider"></div>
                        {candidate.candidate && <p>{candidate.candidate.password}</p>}
                        <div class="ui inverted divider"></div>
                        <p>{candidate.jobFirmName}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.jobPosition}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.foreignLanguageName}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.foreignLanguageLevel}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.educationSchoolName}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.educationDepartment}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.programmingLanguageName}</p>
                        <div class="ui inverted divider"></div>
                        <p>{candidate.programmingLanguageLevel}</p>



                    </div>

                </div>
                <div class="ui vertical divider">

                </div>
            </div>
        </div>
    )
}
