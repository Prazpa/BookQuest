//incomplete test case

import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '@/app/App';
import { ColContext } from '@/app/settype/ColType';
import { ContentContext } from '@/app/settype/ContentType';
import { SelectedContext } from '@/app/settype/SelectedType';
import { UserContext } from '@/app/settype/UserType';

test('renders HomePage by default', () => {
    const router = createMemoryRouter([
        {
            path: "/",
            element: <App />,
        },
    ]);

    render(
        <ColContext.Provider value={{ darkMode: false, setDarkMode: jest.fn() }}>
            <ContentContext.Provider value={{ data: "", setData: jest.fn(), catagoriesValue: "", setCatagoriesValue: jest.fn(), value: "", setValue: jest.fn() }}>
                <UserContext.Provider value={{ username: "", setUsername: jest.fn(), imageUrl: "", setImageUrl: jest.fn() }}>
                    <SelectedContext.Provider value={{ pick: [], setPick: jest.fn(), keyBook: {}, setKeyBook: jest.fn() }}>
                        <RouterProvider router={router} />
                    </SelectedContext.Provider>
                </UserContext.Provider>
            </ContentContext.Provider>
        </ColContext.Provider>
    );

    expect(screen.getByText(/HomePage Content/i)).toBeInTheDocument();
});


