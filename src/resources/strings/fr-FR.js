
/**µµ************** CONTENU TEXTUEL DE L'APPLICATION **µµ**************
 * Pour facilité la modification du contenu de manière dynamique
 * Et s'épargner d'une longue recherche entre dossier pour la modifica-
 * tion d'un text en particulier écris en dur dans le code
 *********************************************************************/
const date = new Date();

const StringAppFr = {

    /********************** SECTION SCREEN CANDIDAT ******************
     * Ensemble du contenu textuel des différents écrans du candidat
     *****************************************************************/

    generalContent: {
        footerTitle: '© 2022 CAB - Mentions légales'
    },

    screenLoginCandidateOrRegister: {

        subTitle: 'Connexion',

        formLabelText: {
            mailAddress: 'Adresse mail',
            passWords: 'Mot de passe',

            placeholderInputCandidate: {
                mailAddress: 'candidat@gmail.com',
                passWords: '**************'
            },

            placeholderInputRecruiter: {
                mailAddress: 'recruteur@gmail.com',
                passWords: '**************'
            }
        },
        titleForgotPassword: 'Mot de passe oublié ?',
        buttonTitleConnexion: 'Connexion',
        buttonTitleRegister: 'Inscription',
    },

    screenProfileCandidate: {
        subTitle: 'Profil candidat',
        editProfile: 'Modifier mon profil',
        searchForAOffer: 'Rechercher une offre',
        contentSearchForAOffer: 'soom !',
    },

    screenProfileRecruiter: {
        subTitle: 'Profil recruteur',
        editProfile: 'Modifier son profil',
        searchForACandidate: 'Rechercher un candidat',
        submitAnOffer: 'Proposer une offre',
    },

    screenRegisterChoiceProfil: {
        subTitle: 'Inscription',
        candidateSectionTitle: 'Candidat',
        recruiterSectionTitle: 'Recruteur',
    },

    screenRegisterCandidat: {
        subTitle: 'Inscription',
        labelInputMailAddress: 'Adresse mail',
        labelInputPassWords: 'Mot de passe',
        labelInputPasswordConfirmation: 'Confirmation mot de passe',
        buttonTitleRegister: 'Inscription',
    },

    screenCreateYourProfileCandidate: {
        subTitle: 'Créer votre profil',
        formLabelText: {

            jobSought: {
                placeholder: 'Poste recherché',
                Animateur: 'Animateur(trice)',
                Directeur: 'Directeur(trice)'
            },
            name: 'Nom*',
            firstName: 'Prénom*',
            birthday: 'Date de naissance*',
            phone: 'Téléphone*',
            postalCode: 'Code postal*',
            city: 'Ville*',
            address: 'Adresse*',
            attachAPhoto: 'Joindre une photo',
        },
        diplomaSection: {

            subTitle: 'Mes diplômes',
            degree: {
                Bafa: 'BAFA',
                Bafd: 'BAFD',
                Bpjeps: 'BPJEPS',
                statusDegree: {
                    encours: 'En cours',
                    obtenu: 'Obtenu',
                },
                StagePratique: 'Stage pratique',
                NoDegree: 'Non diplômé',
                Other: 'Autre :',
            },

            placeholderOther: 'Précisez ........'
        },

        sectionMyAvailabilities: {
            subTitle: 'Mes disponibilités',
            titleSubSectionDayOfTheWeek: 'Jour de la semaine',
            subSectionDayOfTheWeek: { Choice1: 'Mercredi', Choice2: 'Samedi', Choice3: 'Autre :' },
            titleSubSectionHolidayPeriods: 'Périodes de vacances',
            subSectionHolidayPeriods: { monthFebrary: 'Février', monthApril: 'Avril', monthJuly: 'Juillet', monthOctober: 'Octobre', monthAugust: 'Août', monthChristmas: 'Noël' },
            ButtonTitleFinish: 'Terminer',
        },

    },

    screenRegisterRecruiter: {
        subTitle: 'Inscription',
        labelInputNumberSiret: 'N° de siret',
        labelInputMailAddress: 'Adresse mail',
        labelInputPassWords: 'Mot de passe',
        labelInputPasswordConfirmation: 'Confirmation mot de passe',
        buttonTitleRegister: 'Inscription',
    },

    screenCreateYourProfileRecruiter: {
        subTitle: 'Créer votre profil',
        NameOfTheStucture: 'Nom de la structure',
        address: 'Adresse',
        postalCode: 'Code postal',
        city: 'Ville',
        phone: 'Téléphone',
        ButtonTitleValidate: 'Valider',
    },

    screenProfileEditCandidate: {
        subTitle: 'Modifier votre profil',
        formLabelText: {
            jobSought: ['Animateur(trice)', 'Directeur(trice)'],
            name: 'Nom',
            firstName: 'Prénom',
            birthday: 'Date de naissance',
            phone: 'Téléphone',
            postalCode: 'Code postal',
            city: 'Ville',
            address: 'Adresse',
        },
        diplomaSection: {
            subTitle: 'Mes diplômes',
            degree: ['BAFA', 'BAFD', 'BPJEPS', 'Stage pratique', 'Non diplômé', 'Autre :'],
            placeholderOther: 'Précisez ........'
        },
        sectionMyAvailabilities: {
            subTitle: 'Mes disponibilités',
            titleSubSectionDayOfTheWeek: 'Jour de la semaine',
            subSectionDayOfTheWeek: ['Mercredi', 'Samedi', 'Autre :'],
            titleSubSectionHolidayPeriods: 'Périodes de vacances',
            subSectionHolidayPeriods: ['Février', 'Avril', 'Juillet', 'Octobre', 'Août', 'Noël'],
        },
        paging: {
            ButtonTitle: {
                buttonPrev: 'Prev',
                buttonNext: 'Next',
                buttonValider: 'Valider',
            },
            numberpaging: {
                one: '1',
                two: '2',
                tree: '3'
            }
        },
    },

    screenCandidateProfileEditSuccessfully: {
        headerTitle: 'Votre profil a été modifié avec succès.',
        bodyTitle: 'Votre candidature est valable jusqu’au :',
        screenValidityDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        footerTitle: 'Vous recevrez un mail une semaine avant la fin de la date de validité de votre profil.'
    },

    screenProfileEditRecruiter: {

        subTitle: 'Modification de votre profil',
        NameOfTheStucture: 'Nom de la structure',
        address: 'Adresse',
        postalCode: 'Code postal',
        city: 'Ville',
        phone: 'Téléphone',

        sectionMyAvailabilities: {
            subTitle: 'Disponibilités recherchées',
            titleSubSectionDayOfTheWeek: 'Jour de la semaine',
            subSectionDayOfTheWeek: ['Mercredi', 'Samedi', 'Autre :'],
            titleSubSectionHolidayPeriods: 'Périodes de vacances',
            subSectionHolidayPeriods: ['Février', 'Avril', 'Juillet', 'Octobre', 'Août', 'Noël'],
        },

        paging: {
            ButtonTitle: ['Prev', 'Next'],
            numberpaging: ['1', '2', 'Valider']
        },

    },

    screenRecruiterProfileValidation: {
        headerTitle: 'Votre profil a été créé avec succès.',
        bodyTitle: 'Votre candidature est valable jusqu’au :',
        footerTitle: 'Vous recevrez un mail une semaine avant la fin de la date de validité de votre profil.',
        screenValidityDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    },

    screenProfileEditRecruiter: {

        subTitle: 'Modification de votre profil',
        NameOfTheStucture: 'Nom de la structure',
        address: 'Adresse',
        postalCode: 'Code postal',
        city: 'Ville',
        phone: 'Téléphone',

        sectionMyAvailabilities: {
            subTitle: 'Disponibilités recherchées',
            titleSubSectionDayOfTheWeek: 'Jour de la semaine',
            subSectionDayOfTheWeek: ['Mercredi', 'Samedi', 'Autre :'],
            titleSubSectionHolidayPeriods: 'Périodes de vacances',
            subSectionHolidayPeriods: ['Février', 'Avril', 'Juillet', 'Octobre', 'Août', 'Noël'],
        },

        paging: {
            ButtonTitle: ['Prev', 'Next'],
            numberpaging: ['1', '2', 'Valider']
        },

    },

    screenRecruiterProfileEditSuccessfully: {
        headerTitle: 'Votre profil a été modifié avec succès.',
        bodyTitle: 'Votre candidature est valable jusqu’au :',
        footerTitle: 'Vous recevrez un mail une semaine avant la fin de la date de validité de votre profil.',
        screenValidityDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    },

    screenCandidateSearch: {
        subTitle: 'Profils candidats',
        Paragraph: 'Ici vous trouverez tout les profils des candidats',
        namesOfCandidates: ['Olivia Boyer', 'Laurent Barsby', 'Yamina Gobert', 'Celia Baude', 'Christelle Dellobel', 'Horacio Grimault'],
        buttonTitleSelectionOfCandidates: 'Selection des candidats',
    },

    screenProfilesSelectedByTheEmployer: {
        NameOfCandidate: 'Yamina Gobert',
        age: '26 ans',
        address: '130 rue du moulin - 62132 Fiennes',
        mailAddress: 'yamina.gobert@gmail.com',
        titleSubSectionDegrees: 'Diplômes',
        diplomaWithDateObtained: 'BAFA  - Obtenu le JJ/MM/AAAA',
        titleSubSectionHolidayPeriods: 'Périodes de disponibilités:',
        AvailableWeekdays: {
            title: 'Disponible en semaine:',
            days: 'Samedi'
        },
        AvailableDuringTheHolidaysOf: {
            title: 'Disponible pendant les vacances de:',
            periode: 'Février'
        },
        buttonTitleContact: 'Contacter',
        buttonTitleBack: 'Retour ',

    },

    screenContactForm: {
        subTitle: '',
        Paragraph: '',
        formLabelText: {
            name: '',
            firstname: '',
            mail: '',
            Structure: '',
            numberPhone: '',
            yourMessage: '',
            placeholder: 'Bonjour Yamina Gobert.Votre candidature m’interesse, si vous êtes toujours disponible, vous pouvez m’envoyer votre CV par mail ou me contacter par téléphone.',
        },
        buttonTitleContact: 'Contacter',
        buttonTitleBack: 'Retour ',
    },

    screenValidationContactForm: {
        headerTitle: 'Félicitations!',
        bodyTitle: 'Vos messages on bien été envoyé aux candidats.',
        footerTitle: 'Un grand merci à vous.',
        buttonTitleFinish: 'Terminer ',
    },

    screenForgotPassword: {
        subTitle: 'Mot de passe oublié',
        ParagraphEntrezVotreAdressEmail: 'Entrez votre adresse e-mail.',
        formLabelText: { mailAddress: 'Adresse mail' },
        ButtonTitleValidate: 'Valider',
    },

    screenChangedPasswordValidation: {
        bodyTitle: 'Un email vient de vous être envoyé afin de changer votre mot de passe.',
        ButtonTitleFinish: 'Terminer',
    },

    screenEditPasswordCandidate: {
        subTitle: 'Modifier votre mot de passe',
        Paragraph: 'Entrez votre nouveau mot de passe.',
        formLabelText: {
            placeholderNewPassword: 'Nouveau mot de passe',
            placeholderConfirmPassword: 'Confirmer le mot de passe',
            ButtonTitleValidate: 'Valider',
        }

    },

    screenMessageEditPasswordCandidate: {
        headerTitle: 'Votre mot de passe a été modifié avec succès.',
        bodyTitle: 'Votre candidature est valable jusqu’au :',
        screenValidityDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        footerTitle: 'Vous recevrez un mail une semaine avant la fin de la date de validité de votre profil.'
    },


    screenEditPasswordRecruiter: {
        subTitle: 'Modifier votre mot de passe',
        Paragraph: 'Entrez votre nouveau mot de passe.',
        formLabelText: {
            placeholderNewPassword: 'Nouveau mot de passe',
            placeholderConfirmPassword: 'Confirmer le mot de passe',
            ButtonTitleValidate: 'Valider',
        }

    },

    screenAboutCandidate: {
        subTitle: 'A propos',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    screenAboutRecruiter: {
        subTitle: 'A propos',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    screenDrawToggleLayoutCandidate: {
        itemHome: 'Accueil',
        itemAbout: 'A propos',
        itemProfile: 'Profil',
        itemEditPassword: 'Modifier mdp',
        buttonTitleDeconnexion: 'Deconnexion',
    },

    screenDrawToggleLayoutRecruiter: {
        itemHome: 'Accueil',
        itemAbout: 'A propos',
        itemProfile: 'Profil',
        itemCandidate: 'Candidat',
        itemFilters: 'Filtres',
        itemEditPassword: 'Modifier mdp',
        buttonTitleDeconnexion: 'Deconnexion',
    },

    screenLogoutCandidateOrRecruiter: {
        message: 'Vous avez été déconnecté.',
        ButtonTitleFinish: 'Terminer',
    },

}

export default StringAppFr 