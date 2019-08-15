// 3rd party packages from NPM
import $ from 'jquery';
import slick from 'slick-carousel';

// Our modules / classes
import MobileMenu from './modules/MobileMenu';
import HeroSlider from './modules/HeroSlider';
import ScrollToID from './modules/ScrollToID';
import SectionWaypoints from './modules/SectionWaypoints';
import DoubleSlider from './modules/DoubleSlider';
import PageLoader from './modules/PageLoader';
import QuickNav from './modules/QuickNav';

// Instantiate a new object using our modules/classes
var heroSlider = new HeroSlider();
var mobileMenu = new MobileMenu();
var scrollToID = new ScrollToID();
var sectionWaypoints = new SectionWaypoints();
var doubleSlider = new DoubleSlider();
var pageLoader = new PageLoader();
var quickNav = new QuickNav();