import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Building, Mail, User, MessageSquare, Check, Users } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    licenses: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      licenses: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          licenses: '',
          message: ''
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.company && formData.email && formData.licenses;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md mx-4">
          <div className="text-center py-6 sm:py-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Your corporate licensing request has been submitted successfully.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              We'll get back to you within 24 hours with a custom quote.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl">
            <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            Corporate License Request
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm sm:text-base">
            Tell us about your organization's needs and we'll provide a custom quote.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-sm sm:text-base">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2 text-sm sm:text-base">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                Company Name *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Acme Corporation"
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-sm sm:text-base">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@company.com"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenses" className="flex items-center gap-2 text-sm sm:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Number of Licenses Needed *
            </Label>
            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
                <SelectValue placeholder="Select license count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 licenses</SelectItem>
                <SelectItem value="11-50">11-50 licenses</SelectItem>
                <SelectItem value="51-100">51-100 licenses</SelectItem>
                <SelectItem value="101-500">101-500 licenses</SelectItem>
                <SelectItem value="500+">500+ licenses</SelectItem>
                <SelectItem value="custom">Custom (let's discuss)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-sm sm:text-base">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              Additional Details
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your specific requirements, deployment timeline, or any questions you have..."
              rows={3}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">What happens next?</h4>
            <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
              <li>• We'll review your requirements within 24 hours</li>
              <li>• Our team will prepare a custom quote with volume discounts</li>
              <li>• We'll schedule a demo to show enterprise features</li>
              <li>• Get dedicated support for deployment and onboarding</li>
            </ul>
          </div>

          <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-sm sm:text-base"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs sm:text-sm">Submitting...</span>
                </div>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;