import React from 'react';
import onClickOutside from "react-onclickoutside";

class SelectDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      filteredOptions: [],
      activeIndex: null,
      searchStr: ''
    }
    this.filter = this.filter.bind(this);
    this.select = this.select.bind(this);
    this.getDropDownStyle = this.getDropDownStyle.bind(this);
  }

  componentDidMount() {
    this.filter('');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded && this.searchInput) {
      this.searchInput.focus();
    }
    if (nextProps.options) {
      const options = this.generateOptions(nextProps.options);
      this.setState({ options, filteredOptions: options });
    }
    return true;
  }

  getDropDownStyle() {
    const { config } = this.props;
    return !config.dropDownHeight ? null : { maxHeight: config.dropDownHeight, overflowY: 'auto' };
  }

  handleOnKeyDown = (evt) => {
    const { activeIndex, filteredOptions } = this.state;
    switch (evt.key) {
      case 'ArrowDown':
        if (activeIndex < filteredOptions.length - 1) {
          this.setState((prevState) => ({
            activeIndex: prevState.activeIndex + 1
          }));
        }
        break;
      case 'ArrowUp':
        if (activeIndex > 0) {
          this.setState((prevState) => ({
            activeIndex: prevState.activeIndex - 1
          }));
        }
        break;
      case 'Enter':
        this.select(filteredOptions[activeIndex]);
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
    const { config } = this.props;
    return config.noneLabel ?
      [{ [config.options.key]: 'none', [config.options.label]: config.noneLabel }] : [];
  }

  handleClickOutside() {
    const { onClose } = this.props;
    onClose();
  }

  filter(str) {
    const { config } = this.props;
    if (!config.remote) {
      this.filterLocally(str);
    } else {
      this.filterRemote(str);
    }
  }

  filterLocally(value) {
    const { config } = this.props;
    const { options } = this.state;
    let filteredOptions;
    if (value.length < (config.minStr || 3)) {
      filteredOptions = [...options];
    } else {
      filteredOptions = options.filter(opt => opt[config.options.label].toLowerCase()[config.onlyStartsWith ? 'startsWith' : 'includes'](value.toLowerCase()));
    }
    this.setState({ filteredOptions, searchStr: value });
  }

  filterRemote(value) {
    const { onInputChange } = this.props;
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
    onInputChange(value);
    this.setState({ searchStr: value });
  }

  select(opt) {
    const { config, onSelectOption } = this.props;
    if (config.enableSearch) {
      this.setState((prevState) => ({
        searchStr: '',
        filteredOptions: prevState.options
      }));
    }
    onSelectOption(opt[config.options.key] === 'none' ? null : opt);
    this.filter('');
  }



  render() {
    const { config, dropdown, expanded } = this.props;
    const { activeIndex, filteredOptions, searchStr } = this.state;

    const Dropdown = dropdown;
    return (
      <div className={`select-dropdown dropdown-menu ${expanded ? 'show' : ''}`} x-placement="bottom-start" tabIndex="0">
        {config.enableSearch ?
          <div className="bs-searchbox">
            <input
              type="text"
              ref={(input) => { this.searchInput = input; }}
              className="form-control"
              value={searchStr}
              onChange={(evt) => this.filter(evt.target.value)}
              onKeyDown={this.handleOnKeyDown}
              aria-label="Search"
            />
          </div>
          : null}
        <div className="inner show" role="listbox" aria-expanded={expanded} tabIndex="-1">
          <ul className="dropdown-menu inner show" style={this.getDropDownStyle()}>
            {filteredOptions && filteredOptions.slice(0, config.maxElements || 10).map((opt, index) => {
              return (
                <li key={index} className="">
                  <Dropdown
                    option={opt}
                    activeIndex={activeIndex}
                    index={index}
                    onSelectOption={(o) => this.select(o)}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default onClickOutside(SelectDropdown);
