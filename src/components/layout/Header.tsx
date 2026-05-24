import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Calendar, User, BookOpen, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { dataService, SearchResult } from '@/services/dataService';
import mainLogo from '@/assets/main-logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Editorial Board', path: '/editorial-board' },
  { name: 'Guidelines', path: '/guidelines' },
  { name: 'Current Issue', path: '/current-issue' },
  { name: 'Archives', path: '/archives' },
  { name: 'Publish with Us', path: '/publish-with-us' },
  { name: 'Shop', path: '/shop' },
  { name: 'Membership', path: '/membership' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        const results = await dataService.search(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error("Live search error:", error);
      } finally {
        // Keep isSearching true to show results window until manually closed or navigated
      }
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      closeSearch();
    }
  };

  const closeSearch = () => {
    setIsOpen(false);
    setShowMobileSearch(false);
    setSearchResults([]);
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleResultClick = (url: string) => {
    navigate(url);
    closeSearch();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm dark:bg-white dark:border-slate-200">
      <nav className="container-magazine" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 md:h-24 gap-4">
          {/* Mobile Menu Button - Moved to Left */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors -ml-2 dark:hover:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group mr-auto lg:mr-0 shrink-0"
            aria-label="Agri Archives Home"
            onClick={closeSearch}
          >
            <img
              src={mainLogo}
              alt="Agri Archives Logo"
              width={200}
              height={64}
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${location.pathname === item.path
                  ? 'text-[#1a365d] font-semibold bg-[#1a365d]/8 dark:text-[#1a365d] dark:bg-[#1a365d]/8'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-[#1a365d]/5 dark:text-slate-700 dark:hover:text-[#1a365d] dark:hover:bg-[#1a365d]/5'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md dark:hover:bg-slate-100"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Search className="w-6 h-6 text-slate-500 dark:text-slate-500" />
            </button>

            {/* Desktop Search / Mobile Expandable Search */}
            <div className={`${showMobileSearch ? 'absolute top-full left-0 right-0 p-4 bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto dark:bg-white dark:border-slate-200' : 'hidden'} lg:block lg:relative lg:w-48 xl:w-64 lg:bg-transparent lg:border-none lg:shadow-none lg:overflow-visible`}>
              <form onSubmit={handleSearch} className="relative z-50">
                <Search className="absolute left-6 top-7 lg:left-3 lg:top-2.5 h-4 w-4 text-slate-400 dark:text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search magazine..."
                  className="pl-12 lg:pl-9 h-10 lg:h-9 bg-slate-100 focus:bg-white text-slate-800 border-slate-200 transition-colors w-full dark:bg-slate-100 dark:focus:bg-white dark:text-slate-800 dark:border-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus={showMobileSearch}
                />
              </form>

              {/* Live Search Results */}
              <AnimatePresence>
                {searchQuery.length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden z-[60] dark:bg-white dark:border-slate-200"
                  >
                    {searchResults.length > 0 ? (
                      <div className="py-2 max-h-[60vh] overflow-y-auto">
                        {searchResults.map((result) => (
                          <button
                            key={`${result.type}-${result.id}`}
                            onClick={() => handleResultClick(result.url)}
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors flex items-start gap-3 border-b border-slate-100 last:border-0 dark:hover:bg-slate-50 dark:border-slate-100"
                          >
                            <div className={`p-2 rounded-md shrink-0 ${result.type === 'issue' ? 'bg-[#1a365d]/10 text-[#1a365d] dark:bg-[#1a365d]/10 dark:text-[#1a365d]' :
                              result.type === 'editorial' ? 'bg-purple-50 text-purple-700 dark:bg-purple-50 dark:text-purple-700' :
                                result.type === 'page' ? 'bg-blue-50 text-blue-700 dark:bg-blue-50 dark:text-blue-700' :
                                  'bg-slate-100 text-slate-700 dark:bg-slate-100 dark:text-slate-700'
                              }`}>
                              {result.type === 'issue' ? <Calendar className="w-4 h-4" /> :
                                result.type === 'editorial' ? <User className="w-4 h-4" /> :
                                  result.type === 'page' ? <BookOpen className="w-4 h-4" /> :
                                    <FileText className="w-4 h-4" />}
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-slate-800 line-clamp-1 dark:text-slate-800">{result.title}</p>
                              <p className="text-xs text-slate-600 line-clamp-1 dark:text-slate-600">{result.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Menu Only (Search moved to header) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-slate-200 dark:border-slate-200">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${location.pathname === item.path
                      ? 'text-[#1a365d] bg-[#1a365d]/8 font-semibold dark:text-[#1a365d] dark:bg-[#1a365d]/8'
                      : 'text-slate-700 hover:text-[#1a365d] hover:bg-[#1a365d]/5 dark:text-slate-700 dark:hover:text-[#1a365d] dark:hover:bg-[#1a365d]/5'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
