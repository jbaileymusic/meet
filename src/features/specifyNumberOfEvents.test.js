import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('32 events are shown by default.', ({ given, when, then }) => {
        given('the user has not yet changed the number of events', () => {

        });

        when('the user is viewing the list of events', () => {

        });

        then(/^(\d+) events will be displayed by default$/, (arg0) => {

        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('the user is viewing the list of events', () => {

        });

        when(/^the user selects a display button other than (\d+)$/, (arg0) => {

        });

        then('the selected number of events will be displayed', () => {

        });
    });

});