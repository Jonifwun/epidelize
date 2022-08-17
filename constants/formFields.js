

const loginFields = [
    {
        labelText: 'Email Address',
        labelFor: 'emailAddress',
        id: 'emailAddress',
        type: "email",
        placeholder: 'Email Address',
        isRequired: true
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        type: "password",
        placeholder: 'Password',
        isRequired: true
    },

]

const signUpFields = [
    {
        labelText: 'Email Address',
        labelFor: 'emailAddress',
        id: 'emailAddress',
        type: "email",
        placeholder: 'Email Address',
        isRequired: true
    },
    {
        labelText: 'Display Name',
        labelFor: 'displayName',
        id: 'displayName',
        type: "text",
        placeholder: 'Display Name',
        isRequired: true
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        type: "password",
        placeholder: 'Password',
        isRequired: true
    },
    {
        labelText: 'Confirm Password',
        labelFor: 'confirm-password',
        id: 'confirm-password',
        type: "password",
        placeholder: 'Password',
        isRequired: true
    }
]

const filterFields = [
    {
        labelText: 'Release Profile',
        labelFor: 'release-profile',
        id: 'release-profile',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Pellets',
        labelFor: 'pellets',
        id: 'pellets',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Homodimers',
        labelFor: 'homodimer',
        id: 'homodimer',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Heterodimers',
        labelFor: 'heterodimer',
        id: 'heterodimer',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Monomers',
        labelFor: 'monomer',
        id: 'monomer',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Esters',
        labelFor: 'ester',
        id: 'Ester',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Carbonates',
        labelFor: 'carbonate',
        id: 'Carbonate',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Ureas',
        labelFor: 'urea',
        id: 'Urea',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Carbamates',
        labelFor: 'carbamate',
        id: 'Carbamate',
        type: "checkbox",
        checked: false,
    },
    {
        labelText: 'Amides',
        labelFor: 'amide',
        id: 'Amide',
        type: "checkbox",
        checked: false,
    }
]

const addConjugateFields = [
    {
        labelText: 'Name',
        labelFor: 'names',
        id: 'names',
        type: "text",
        placeholder: 'Name',
        isRequired: true
    },
    // {
    //     labelText: 'Designer',
    //     labelFor: 'designer',
    //     id: 'designer',
    //     type: "text",
    //     placeholder: 'Designer',
    //     isRequired: true
    // },
    {
        labelText: 'Keywords',
        labelFor: 'keywords',
        id: 'keywords',
        type: "text",
        placeholder: 'Keywords',
        isRequired: true
    },
    {
        labelText: 'ClogP',
        labelFor: 'ClogP',
        id: 'ClogP',
        type: "number",
        placeholder: 'ClogP',
        isRequired: true
    },
    {
        labelText: 'Hydrolysable Bond',
        labelFor: 'hydrolysableBond',
        id: 'hydrolysableBond',
        type: "text",
        placeholder: 'Hydrolysable Bond',
        isRequired: true
    },
    // {
    //     labelText: 'Conjugate Type',
    //     labelFor: 'conjugate-type',
    //     id: 'conjugate-type',
    //     type: "text",
    //     placeholder: 'Conjugate Type',
    //     isRequired: true
    // },
    {
        labelText: 'Molecular Weight (g/mol)',
        labelFor: 'mw',
        id: 'mw',
        type: "text",
        placeholder: 'Molecular Weight',
        isRequired: true
    },
    {
        labelText: 'Chemical Formula',
        labelFor: 'formula',
        id: 'formula',
        type: "text",
        placeholder: 'Chemical Formula',
        isRequired: true
    },
    {
        labelText: 'M.p. (℃)',
        labelFor: 'M.p.',
        id: 'mp',
        type: "number",
        placeholder: 'M.p.',
        isRequired: false
    },
    {
        labelText: 'Dry Tg (℃)',
        labelFor: 'dryTg',
        id: 'dryTg',
        type: "number",
        placeholder: 'Dry Tg',
        isRequired: false
    },
    {
        labelText: 'Wet Tg (℃)',
        labelFor: 'wetTg',
        id: 'wetTg',
        type: "number",
        placeholder: 'Wet Tg',
        isRequired: false
    },
    {
        labelText: 'Date of Synthesis',
        labelFor: 'DOS',
        id: 'DOS',
        type: "text",
        placeholder: 'Date of Synthesis',
        isRequired: false
    }
    // {
    //     labelText: 'Description',
    //     labelFor: 'description',
    //     id: 'description',
    //     type: "text",
    //     placeholder: 'Description',
    //     isRequired: true
    // },
]

const conjugateTypeOptions = [
    {
        label: 'Heterodimer',
        value: 'Heterodimer'
    },
    {
        label: 'Homodimer',
        value: 'Homodimer'
    },
    {
        label: 'Monomer',
        value: 'Monomer'
    }
]

const designerOptions = [
    {
        label: 'JD',
        value: 'JD'
    },
    {
        label: 'MAJS',
        value: 'MAJS'
    }
]

export { loginFields, signUpFields, addConjugateFields, filterFields, conjugateTypeOptions, designerOptions }