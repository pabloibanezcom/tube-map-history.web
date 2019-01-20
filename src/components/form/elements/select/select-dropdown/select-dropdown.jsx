import PropTypes from 'prop-types';
import React from 'react';
import onClickOutside from "react-onclickoutside";
import { getDynamicComponent } from '../../../../dynamic-components/dynamic-components';

class SelectDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      filteredOptions: [],
      activeIndex: null,
      searchStr: ''
    }
    this.customDropdown = getDynamicComponent(this.props.config.custom.dropdown);
    this.filter = this.filter.bind(this);
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    this.filter('');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded) {
      this.searchInput && this.searchInput.focus();
    }
    if (nextProps.options) {
      const options = this.generateOptions(nextProps.options);
      this.setState({ options: options, filteredOptions: options });
    }
    return true;
  }

  handleClickOutside(evt) {
    this.props.onClose();
  }

  handleOnKeyDown = (evt) => {
    switch (evt.key) {
      case 'ArrowDown':
        if (this.state.activeIndex < this.state.filteredOptions.length - 1) {
          this.setState((prevState, props) => ({
            activeIndex: prevState.activeIndex + 1
          }));
        }
        break;
      case 'ArrowUp':
        if (this.state.activeIndex > 0) {
          this.setState((prevState, props) => ({
            activeIndex: prevState.activeIndex - 1
          }));
        }
        break;
      case 'Enter':
        this.select(this.state.filteredOptions[this.state.activeIndex]);
        evt.preventDefault();
        break;
      default:
        break;
    }
  }

  generateOptions = (options) => {
    return [
      ...this.getNoneOption(),
      ...options
    ];
  }

  getNoneOption = () => {
    return this.props.config.noneLabel ?
      [{ [this.props.config.options.key]: 'none', [this.props.config.options.label]: this.props.config.noneLabel }] : [];
  }

  filter(str) {
    if (!this.props.config.remote) {
      this.filterLocally(str);
    } else {
      this.filterRemote(str);
    }
  }

  filterLocally(value) {
    let filteredOptions;
    if (value.length < 3) {
      filteredOptions = [...this.state.options];
    } else {
      filteredOptions = this.state.options.filter(opt => opt[this.props.config.options.label].toLowerCase().includes(value.toLowerCase()));
    }
    this.setState({ filteredOptions: filteredOptions, searchStr: value });
  }

  filterRemote(value) {
    // if (value.length >= this.props.config.remote.minChars) {
    //   search(this.props.config.remote.model, { [this.props.config.remote.propertyName]: value })
    //     .then(res => {
    //       const filteredOptions = [
    //         ...this.getNoneOption(),
    //         ...res.data
    //       ];
    //       this.setState({ filteredOptions: filteredOptions, activeIndex: 0 })
    //     })
    //     .catch(err => console.log(err));
    // } else {
    //   this.setState({ filteredOptions: [], activeIndex: 0 });
    // }
    this.props.onInputChange(value);
    this.setState({ searchStr: value });
  }

  select(opt) {
    if (this.props.config.enableSearch) {
      this.setState((prevState, props) => ({
        searchStr: '',
        filteredOptions: prevState.options
      }));
    }
    this.props.onSelectOption(opt[this.props.config.options.key] === 'none' ? null : opt);
    this.filter('');
  }

  render() {

    return <div className={`select-dropdown dropdown-menu ${this.props.expanded ? 'show' : ''}`} x-placement="bottom-start" tabIndex="0" >
      {this.props.config.enableSearch ?
        <div className="bs-searchbox">
          <input type="text" ref={(input) => { this.searchInput = input; }} className="form-control"
            value={this.state.searchStr} onChange={(evt) => this.filter(evt.target.value)} onKeyDown={this.handleOnKeyDown} aria-label="Search" />
        </div>
        : null}
      <div className="inner show" role="listbox" aria-expanded={this.props.expanded ? true : false} tabIndex="-1">
        <ul className="dropdown-menu inner show">
          {this.state.filteredOptions && this.state.filteredOptions.map((opt, index) => {
            return <li key={index} className="">
              {this.customDropdown ? <this.customDropdown option={opt} activeIndex={this.state.activeIndex} index={index} onSelectOption={(opt) => this.select(opt)} /> :
                <a role="option" onClick={() => this.select(opt)} className={`dropdown-item ${this.state.activeIndex === index ? 'active' : ''}`} aria-disabled="false" aria-selected="true">
                  <span className="text">{opt[this.props.config.options.label]}</span>
                </a>}
            </li>
          })}
        </ul>
      </div>
    </div>
  }
}

SelectDropdown.propTypes = {
  options: PropTypes.array
};

SelectDropdown.defaultProps = {
  options: []
};

export default onClickOutside(SelectDropdown);
