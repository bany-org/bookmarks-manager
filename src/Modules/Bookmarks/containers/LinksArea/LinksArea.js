import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LinksArea.css'

import Link from '../../components/Link/link'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';
import { requestContentStart, removeItemStart } from '../../../../App/store/actions';

class LinksArea extends Component {

    state = {
        showDesc: false,
        showEditButton: false,
        searchPhrase: '',
    }

    onRemoveItem = (linkIndex) => {
        this.props.removeItem(linkIndex)
    }

    onEditItem = () => {
    }

    onSearchChange = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    toggleDescVisibility = () => {
        this.setState({
            showDesc: !this.state.showDesc,
        })
    }

    toggleRemoveMode = () => {
        this.setState({
            showEditButton: !this.state.showEditButton,
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.needToReload) {
            this.props.requestContent()
        }
    }

    componentDidMount() {
        this.props.requestContent()
    }

    filterItems = (filter, elements) => {
        const filteredLinks = elements.filter(elem => {
            return (
                elem.description.toLowerCase().includes(filter.toLowerCase()) ||
                elem.name.toLowerCase().includes(filter.toLowerCase()) ||
                elem.link.toLowerCase().includes(filter.toLowerCase())
            )
        });

        return filteredLinks;
    };

    render() {
        const links = this.filterItems(this.state.searchPhrase, this.props.links)

        const result = links.map((elem, index) => {
            if (elem.name !=='') {
                return (
                    <Link
                        key={index}
                        id={elem.link_id}
                        link={elem.link}
                        name={elem.name}
                        desc={elem.description}
                        showDesc={this.state.showDesc}
                        showEditButton={this.state.showEditButton}
                        onRemoveItem={() => this.onRemoveItem(elem.link_id)}
                        onEditItem={this.onEditItem}
                    />
                )
            } else {
                return null
            }
        });

        return (
            <div className='LinksArea'>
                  <div className='elements'>
                    <Input 
                        name='searchBox'
                        title='Czego szukasz'
                        subtitle='dowolny wyraz'
                        type='text'
                        onInputChange={this.onSearchChange}
                        value={this.state.searchPhrase}
                    />
                    <div className='singleElement'>
                        <Button 
                            onClick={this.toggleDescVisibility}
                            isVisible={this.state.showDesc} 
                            labelIn={'Pokaż opis'} 
                            labelOut={'Ukryj opis'}
                        />
                    </div>
                    <div className='singleElement'>
                        <Button 
                            onClick={this.toggleRemoveMode}
                            isVisible={this.state.showEditButton} 
                            labelIn={'Edit mode'} 
                            labelOut={'Save mode'}
                        />
                    </div>
                </div>
                <div className='Links'>
                    {this.props.isContentLoading ? <Spinner /> : result }
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        links: state.bookmarks.links,
        needToReload: state.bookmarks.needToReload,
        isContentLoading: state.bookmarks.isContentLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestContent: () => dispatch(requestContentStart()),
        removeItem: (elementId) => dispatch(removeItemStart(elementId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksArea);