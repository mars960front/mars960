import React from 'react'
import { useTranslation } from 'react-i18next';
import '../components/i18next';

const Outlets = () => {
    const { t } = useTranslation();

    return (
        <div className='w-[80%] h-[100%] bg-slate-600 rounded-[20px] flex justify-center items-center'>
            <h1 className='animate-pulse text-[30px] font-bold'>{t('greeting')}</h1>
        </div>
    )
}

export default Outlets