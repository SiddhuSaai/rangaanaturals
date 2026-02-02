import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

// Static imports for Turbopack compatibility
import en from '../../messages/en.json';
import ta from '../../messages/ta.json';

const messages = { en, ta };

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const locale = (cookieStore.get('locale')?.value || 'en') as 'en' | 'ta';

    return {
        locale,
        messages: messages[locale]
    };
});

