import React from 'react'
import { useTranslation } from 'react-i18next';
import '../components/i18next';
import { t } from 'i18next';

const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <div className='w-[20%] h-[100%] bg-slate-600 rounded-[20px] flex justify-center'>
            <p>{t('home')}</p>
        </div>
    )
}

export default Sidebar