import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from '@digi/arbetsformedlingen-react'
import './App.css'

export default () => <DigiLayoutBlock>
    <DigiTypography>
        <h1>Welcome to Arbetsformedlingen</h1>
        <DigiLayoutColumns>
            <p>We are happy to have you here!</p>
            <p>To get started, please check out our documentation.</p>
            <p>Have a great day!</p>
        </DigiLayoutColumns>
    </DigiTypography>
</DigiLayoutBlock>