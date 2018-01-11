import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import { createSelector } from 'reselect';
import { PropTypes } from 'prop-types';

import { makeSelectLocale, makeSelectLocaleList } from 'containers/I18nProvider/selectors';
import FormListing from 'components/FormListing';
import * as actions from 'containers/I18nProvider/actions';
import * as formListActions from './actions';
import { selectFormList } from './selectors';

class FormList extends React.Component {
    render() {
        const { updateFormsList, updateAssignmentList, formList, intl: { formatMessage } } = this.props;
        return (
            <FormListing
                formatMessage={formatMessage}
                updateFormsList={updateFormsList}
                formList={formList}
                updateAssignmentList={updateAssignmentList}
            />
        );
    }
}

FormList.propTypes = {
    updateFormsList: PropTypes.func,
    updateAssignmentList: PropTypes.func,
    appLocale: PropTypes.array,
    currentLanguage: PropTypes.string,
    formList: PropTypes.object,
    intl: PropTypes.object,
};

const mapStateToProps = createSelector(
    [makeSelectLocaleList(), makeSelectLocale(), selectFormList],
    (appLocale, currentLanguage, formList) => ({
        appLocale,
        currentLanguage,
        formList,
    })
);

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...formListActions }, dispatch);

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(FormList));
