import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
		    <div id='home-header' className='clear-fix'>
		       <div className='home-header-left float-left'>
		          <span>北京</span>&nbsp;
		          <i className='icon-angle-down'></i>
		       </div>
		       <div className='home-header-right float-right'>
				  <i className='icon-user'></i>
		       </div>
			   <div className='home-header-middle'>
			       <div className='search-container'>
			          <i style={{color:'#ccc',margin:'0px 5px'}} className='icon-search'></i>
				       <input type='text'/>
				   </div>
				</div>
		    </div>
		)
	}
}
export default  HomeHeader